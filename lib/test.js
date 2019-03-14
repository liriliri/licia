const path = require('path');
const comTranspiler = require('eustia-component');
const each = require('licia/each');
const defaults = require('licia/defaults');
const fs = require('licia/fs');
const extractBlockCmts = require('licia/extractBlockCmts');
const trim = require('licia/trim');
const startWith = require('licia/startWith');
const indent = require('licia/indent');
const toArr = require('licia/toArr');
const rtrim = require('licia/rtrim');

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
    all: [],
    browser: [],
    node: [],
    manual: []
};

each(modData, function(val, key) {
    if (val.demo) demoData.push(key);
    if (val.test) testData[val.test].push(key);
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

    let modName = options.argv.remain[0];
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
            return await mkdir(path);
        }

        try {
            await rmdir(path);
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
    const platformTests =
        testData[options.type === 'mocha' ? 'node' : 'browser'];
    const tests = testData.all.concat(platformTests);

    for (const modName of tests) {
        await runMod(modName);
    }

    if (options.type === 'karma') {
        await genKarmaConf(tests);
    }

    await genTestUtil(tests);

    if (options.type === 'mocha') {
        await runScript('mocha', []);
    } else {
        await runScript('karma', ['start']);
    }
}

async function runMod(modName) {
    const modPath = resolvePath(
        'src',
        modName[0].toLowerCase(),
        modName + '.js'
    );
    const modTestPath = modPath.replace('.js', '.test.js');
    const testOutputPath = resolvePath('test/' + modName + '.js');

    await fileExist(modPath);
    await fileExist(modTestPath);
    const tpl = await readTpl(options.type + '.test');
    const data = await fs.readFile(modTestPath, 'utf8');
    await fs.writeFile(
        testOutputPath,
        tpl({
            modName,
            utilPath: options.all ? 'util' : modName,
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
        await runScript('mocha', ['test/' + modName]);
    } else {
        await runScript('karma', ['start']);
    }
}

async function runDemo(modName) {
    const modPath = resolvePath(
        'src',
        modName[0].toLowerCase(),
        modName + '.js'
    );
    const modTestPath = modPath.replace('.js', 'Demo.html');
    const demoOutputPath = resolvePath('demo/' + modName + '.html');

    await fileExist(modPath);
    await fileExist(modTestPath);
    const tpl = await readTpl('demo');
    await fs.writeFile(demoOutputPath, tpl({ modName }), 'utf8');
    await genTestUtil(modName + 'Demo');

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
    const outputPath = resolvePath('testTs/' + modName + '.ts');
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
        log(`Check testTs/${modName}.ts to see if ts definition is correct:)`);
    }
}

async function runRelease() {
    const tpl = await readTpl('release.test');

    let modNames = [];
    modNames = modNames.concat(testData.all);
    modNames = modNames.concat(testData.node);

    for (let i = 0, len = modNames.length; i < len; i++) {
        const modName = modNames[i];
        const modTestPath = resolvePath(
            'src',
            modName[0].toLowerCase(),
            modName + '.test.js'
        );
        const testOutputPath = resolvePath('test/' + modName + '.js');
        let data = await fs.readFile(modTestPath, 'utf8');
        data = tpl({
            modName,
            data: indent(trim(data))
        });
        data = data.replace(
            /util\.([a-zA-Z$]*)\b/g,
            (match, modName) => `require('licia/${modName}')`
        );
        await fs.writeFile(testOutputPath, data, 'utf8');
    }

    await runScript('mocha', []);
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
        files += "'testUtil/util.js', ";
        for (let i = 0, len = modName.length; i < len; i++) {
            files += "'test/" + modName[i] + ".js', ";
        }
        files = rtrim(files, ', ');
    } else {
        files += "'testUtil/" + modName + ".js', ";
        files += "'test/" + modName + ".js'";
    }

    await fs.writeFile(
        resolvePath('karma.conf.js'),
        tpl({ files: files }),
        'utf8'
    );
}

function getKarmaType() {
    return options.sauce ? 'karma.sauce' : 'karma.conf';
}

async function genTestUtil(modName) {
    let outputDir = options.demo ? 'demo' : 'testUtil';
    let format = 'global';

    if (options.type === 'mocha' && !options.demo) format = 'commonjs';

    let output =
        outputDir +
        '/' +
        (options.all && !options.demo ? 'util' : modName) +
        '.js';
    if (options.demo) output = output.replace('Demo.js', '.js');

    let buildOpts = {
        files: [],
        output: output,
        extension: ['js', 'html'],
        library: '$_abcdefghijklmnopqrstuvwxyz'
            .split('')
            .map(val => 'src/' + val),
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
