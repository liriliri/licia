const path = require('path');
const {
    each,
    defaults,
    fs,
    trim,
    indent,
    toArr,
    rtrim,
    contain,
    concat
} = require('licia');

const {
    mkdir,
    rmdir,
    fileExist,
    eustiaBuild,
    readTpl,
    runScript,
    runScripts,
    extractComment,
    extractScripts,
    resolvePath
} = require('./util');
const modData = require('../index.json');

const testData = {
    browser: [],
    node: []
};

each(modData, function(val, key) {
    if (val.test) {
        each(val.test, type => {
            testData[type].push(key);
        });
    }
});

module.exports = async function() {
    if (options.release) {
        await rmdir('test');
        await mkdir('test');
    } else if (options.ts) {
        await mkdir('testTs');
    } else {
        await rmdir('test');
        await rmdir('testUtil');
        await mkdir('test');
        await mkdir('testUtil');
    }

    defaults(options, {
        type: 'mocha'
    });
    if (options.release) {
        await runRelease();
        return;
    }
    /* eslint-disable require-atomic-updates */
    if (options.browser) options.type = 'karma';

    const modName = options.remain[0];
    if (!modName) {
        options.all = true;
        if (options.ts) {
            await runAllTs();
        } else {
            await runAllMod();
        }
        return;
    }

    if (options.ts) {
        await runTs(modName);
    } else {
        await runMod(modName);
    }
};

const testScripts = {
    before: [],
    after: []
};

function collectTestScripts(data) {
    const scripts = extractScripts(data);

    if (scripts.before) {
        testScripts.before = concat(testScripts.before, scripts.before);
    }
    if (scripts.after) {
        testScripts.after = concat(testScripts.after, scripts.after);
    }
}

async function runAllMod() {
    const tests = testData[options.type === 'mocha' ? 'node' : 'browser'];

    for (const modName of tests) {
        await runMod(modName);
    }

    if (options.type === 'karma') {
        await genKarmaConf(tests);
    }

    await genTestUtil(tests);

    await runScripts(testScripts.before);
    if (options.type === 'mocha') {
        await runScript('nyc', ['mocha', '.licia/test']);
    } else {
        await runScript('karma', ['start', '.licia/karma.conf.js']);
    }
    await runScripts(testScripts.after);
}

async function runMod(modName) {
    const modPath = resolvePath('src', modName + '.js');
    const modTestPath = resolvePath('test', modName + '.js');
    const testOutputPath = resolvePath('.licia/test/' + modName + '.js');

    await fileExist(modPath);
    await fileExist(modTestPath);
    const tpl = await readTpl(options.type + '.test');
    const testHelperTpl = await readTpl('test.helper');
    let data = await fs.readFile(modTestPath, 'utf8');
    collectTestScripts(data);
    if (!contain(data, 'it(')) {
        data = `it('basic', () => {\n${indent(trim(data))}\n});`;
    }
    await fs.writeFile(
        testOutputPath,
        tpl({
            modName,
            testHelper: indent(
                trim(
                    testHelperTpl({
                        modName
                    })
                )
            ),
            utilPath: options.all
                ? options.browser
                    ? 'browser'
                    : 'node'
                : modName,
            data: indent(trim(data))
        }),
        'utf8'
    );

    if (!options.all) await genTestUtil(modName);

    if (options.type === 'karma' && !options.all) {
        await genKarmaConf(modName);
    }

    if (options.all) return;

    await runScripts(testScripts.before);
    if (options.docker) {
        process.env.MOD_NAME = modName;
        await runScript('docker-compose', [
            'run',
            '-e',
            `MOD_NAME=${modName}`,
            '--rm',
            'test'
        ]);
    } else if (options.type === 'mocha') {
        await runScript('nyc', ['mocha', '.licia/test/' + modName]);
    } else {
        await runScript('karma', ['start', '.licia/karma.conf.js']);
    }
    await runScripts(testScripts.after);
}

async function runAllTs() {
    const modNames = [];

    each(modData, (val, key) => modNames.push(key));

    for (let i = 0, len = modNames.length; i < len; i++) {
        await runTs(modNames[i]);
    }

    log('All done!');
}

async function runTs(modName) {
    const modPath = resolvePath('src', modName + '.js');
    const outputPath = resolvePath('.licia/testTs/' + modName + '.ts');
    const data = await fs.readFile(modPath, 'utf8');

    const example = extractComment(data, 'example');

    const output = `import ${modName} = require('licia/${modName}');\n\n${example}`;

    await fs.writeFile(outputPath, output, 'utf8');

    if (!options.all) {
        log(
            `Check .licia/testTs/${modName}.ts to see if ts definition is correct:)`
        );
    }
}

async function runRelease() {
    const tpl = await readTpl('release.test');
    const testHelperTpl = await readTpl('test.helper');

    let modNames = [];
    modNames = modNames.concat(testData.node);

    for (let i = 0, len = modNames.length; i < len; i++) {
        const modName = modNames[i];
        const modTestPath = resolvePath('test', modName + '.js');
        const testOutputPath = resolvePath('.licia/test/' + modName + '.js');
        let data = await fs.readFile(modTestPath, 'utf8');
        if (!contain(data, 'it(')) {
            data = `it('basic', () => {\n${indent(trim(data))}\n});`;
        }
        data = tpl({
            modName,
            testHelper: indent(
                trim(
                    testHelperTpl({
                        modName
                    })
                )
            ),
            data: indent(trim(data))
        });
        data = data.replace(
            /util\.([0-9a-zA-Z$]*)\b/g,
            (match, modName) => `require('licia/${modName}')`
        );
        await fs.writeFile(testOutputPath, data, 'utf8');
    }

    await runScript('mocha', ['.licia/test']);
}

function log() {
    if (options.silent) return;

    console.log.apply(null, arguments);
}

async function genKarmaConf(modName) {
    let files = '';

    const tpl = await readTpl(getKarmaType());

    if (options.all) {
        files += "'./testUtil/browser.js', ";
        for (let i = 0, len = modName.length; i < len; i++) {
            files += "'./test/" + modName[i] + ".js', ";
        }
        files = rtrim(files, ', ');
    } else {
        files += "'./testUtil/" + modName + ".js', ";
        files += "'./test/" + modName + ".js'";
    }

    await fs.writeFile(
        resolvePath('.licia/karma.conf.js'),
        tpl({ files: files }),
        'utf8'
    );
}

function getKarmaType() {
    return options.sauce ? 'karma.sauce' : 'karma.conf';
}

async function genTestUtil(modName, { extension = ['js'] } = {}) {
    const outputDir = '.licia/testUtil';
    let format = 'global';

    if (options.type === 'mocha') format = 'commonjs';

    const output =
        outputDir +
        '/' +
        (options.all ? (options.browser ? 'browser' : 'node') : modName) +
        '.js';

    const buildOpts = {
        files: [],
        output,
        extension,
        library: 'src',
        include: modName,
        format: format,
        namespace: 'util',
        sourcemap: true
    };

    modName = toArr(modName);
    const files = [];
    each(modName, function(modName) {
        files.push(
            resolvePath('lib/tpl/test.helper.tpl'),
            resolvePath('test', modName + '.js')
        );
    });
    buildOpts.files = files;

    await eustiaBuild(buildOpts);

    let data = await fs.readFile(output, 'utf8');
    data = data.replace(/LICIA_TEST/g, 'true');
    await fs.writeFile(output, data, 'utf8');

    let map = await fs.readFile(output + '.map', 'utf8');
    map = JSON.parse(map);
    const dir = path.resolve(__dirname, '../');
    map.sources = map.sources.map(source => {
        source = source.replace('eustia:///', '');
        source = 'src/' + source;
        return path.resolve(dir, source);
    });
    map.file = path.resolve(output);
    await fs.writeFile(output + '.map', JSON.stringify(map), 'utf8');
}
