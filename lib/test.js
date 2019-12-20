const path = require('path');
const comTranspiler = require('eustia-component');
const {
    each,
    defaults,
    fs,
    extractBlockCmts,
    trim,
    startWith,
    indent,
    toArr,
    rtrim,
    contain
} = require('licia');

const {
    outdentOneSpace,
    mkdir,
    rmdir,
    fileExist,
    eustiaBuild,
    readTpl,
    runScript
} = require('./util');
const modData = require('../index.json');

let demoData = [];
let testData = {
    browser: [],
    node: []
};

each(modData, function(val, key) {
    if (val.demo) demoData.push(key);
    if (val.test) {
        each(val.test, type => {
            testData[type].push(key);
        });
    }
});

module.exports = async function() {
    if (options.release) {
        await dirCb(false, 'test');
        await dirCb(true, 'test');
    } else if (options.ts) {
        await dirCb(true, 'testTs');
    } else if (options.demo) {
        await dirCb(true, 'demo');
    } else {
        await dirCb(false, 'test');
        await dirCb(false, 'testUtil');
        await dirCb(true, 'test');
        await dirCb(true, 'testUtil');
    }

    defaults(options, {
        type: 'mocha'
    });
    if (options.release) {
        await runRelease();
        return;
    }
    if (options.browser) options.type = 'karma';
    if (options.all) {
        if (options.ts) {
            await runAllTs();
        } else if (options.demo) {
            await runAllDemo();
        } else {
            await runAllMod();
        }
        return;
    }

    let modName = options.remain[0];
    if (!modName) return console.log('A module name must be given.');

    if (options.ts) {
        await runTs(modName);
    } else if (options.demo) {
        await runDemo(modName);
    } else {
        await runMod(modName);
    }

    async function dirCb(create, path) {
        if (create) {
            return await mkdir('.licia/' + path);
        }

        try {
            await rmdir('.licia/' + path);
        } catch (e) {}
    }
};

async function runAllDemo() {
    for (const modName of demoData) {
        await runDemo(modName);
    }

    log('All done!');
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

    if (options.type === 'mocha') {
        await runScript('nyc', ['mocha', '.licia/test']);
    } else {
        await runScript('karma', ['start', '.licia/karma.conf.js']);
    }
}

async function runMod(modName) {
    const modPath = resolvePath(
        'src',
        modName[0].toLowerCase(),
        modName + '.js'
    );
    const modTestPath = modPath.replace('.js', '.test.js');
    const testOutputPath = resolvePath('.licia/test/' + modName + '.js');

    await fileExist(modPath);
    await fileExist(modTestPath);
    const tpl = await readTpl(options.type + '.test');
    const testHelperTpl = await readTpl('test.helper');
    let data = await fs.readFile(modTestPath, 'utf8');
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

    if (options.type === 'mocha') {
        await runScript('nyc', ['mocha', '.licia/test/' + modName]);
    } else {
        await runScript('karma', ['start', '.licia/karma.conf.js']);
    }
}

async function runDemo(modName) {
    const modPath = resolvePath(
        'src',
        modName[0].toLowerCase(),
        modName + '.js'
    );
    const modTestPath = modPath.replace('.js', '.demo.html');
    const demoOutputPath = resolvePath('.licia/demo/' + modName + '.html');

    await fileExist(modPath);
    await fileExist(modTestPath);
    const tpl = await readTpl('demo');
    await fs.writeFile(demoOutputPath, tpl({ modName }), 'utf8');
    await genTestUtil(modName + '.demo', {
        extension: ['js', 'html']
    });

    log(
        'Navigate "http://localhost:3000/' +
            modName +
            '.html" to view the page:)'
    );
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
    const modPath = resolvePath(
        'src',
        modName[0].toLowerCase(),
        modName + '.js'
    );
    const outputPath = resolvePath('.licia/testTs/' + modName + '.ts');
    const data = await fs.readFile(modPath, 'utf8');

    const comments = extractBlockCmts(data);
    let example = '';
    comments.forEach(comment => {
        comment = trim(comment);
        if (startWith(comment, 'example')) {
            example = comment.replace(/^example/, '');
            example = outdentOneSpace(example);
            example = trim(example);
        }
    });

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
        const modTestPath = resolvePath(
            'src',
            modName[0].toLowerCase(),
            modName + '.test.js'
        );
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
            /util\.([a-zA-Z$]*)\b/g,
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

function resolvePath() {
    let args = toArr(arguments);

    args.unshift(process.cwd());

    return path.resolve.apply(path, args);
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
    let outputDir = options.demo ? '.licia/demo' : '.licia/testUtil';
    let format = 'global';

    if (options.type === 'mocha' && !options.demo) format = 'commonjs';

    let output =
        outputDir +
        '/' +
        (options.all && !options.demo
            ? options.browser
                ? 'browser'
                : 'node'
            : modName) +
        '.js';
    if (options.demo) output = output.replace('.demo.js', '.js');

    const library = '$_abcdefghijklmnopqrstuvwxyz'
        .split('')
        .map(val => 'src/' + val);

    let buildOpts = {
        files: [],
        output: output,
        extension,
        library,
        include: modName,
        format: format,
        namespace: 'util',
        transpiler: [
            {
                test: /\.html$/,
                handler: comTranspiler()
            }
        ]
    };

    if (!options.demo) {
        modName = toArr(modName);
        let files = [];
        each(modName, function(modName) {
            files.push(
                resolvePath('lib/tpl/test.helper.hbs'),
                resolvePath(
                    'src',
                    modName[0].toLowerCase(),
                    modName + '.test.js'
                )
            );
        });
        buildOpts.files = files;
    }

    await eustiaBuild(buildOpts);
}
