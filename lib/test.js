const path = require('path');
const eustia = require('eustia');
const comTranspiler = require('eustia-component');
const each = require('licia/each');
const waterfall = require('licia/waterfall');
const defaults = require('licia/defaults');
const mkdir = require('licia/mkdir');
const rmdir = require('licia/rmdir');
const map = require('licia/map');
const partial = require('licia/partial');
const fs = require('licia/fs');
const extractBlockCmts = require('licia/extractBlockCmts');
const trim = require('licia/trim');
const startWith = require('licia/startWith');
const indent = require('licia/indent');
const toArr = require('licia/toArr');
const rtrim = require('licia/rtrim');

const readTpl = require('./helper/readTpl');
const runScript = require('./helper/runScript');
const readFile = require('./helper/readFile');
const writeFile = require('./helper/writeFile');
const fileExist = require('./helper/fileExist');
const util = require('./util');
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

module.exports = function() {
    let callbacks = [];

    if (options.release) {
        callbacks = [dirCb(false, 'test'), dirCb(true, 'test')];
    } else if (options.ts) {
        callbacks.push(dirCb(true, 'testTs'));
    } else if (options.demo) {
        callbacks.push(dirCb(true, 'demo'));
    } else {
        callbacks = [
            dirCb(false, 'test'),
            dirCb(false, 'testUtil'),
            dirCb(true, 'test'),
            dirCb(true, 'testUtil')
        ];
    }

    waterfall(callbacks, async function() {
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
                runAllDemo();
            } else {
                runAllMod();
            }
            return;
        }

        let modName = options.argv.remain[0];
        if (!modName) return console.log('A module name must be given.');

        if (options.ts) {
            await runTs(modName);
        } else if (options.demo) {
            runDemo(modName);
        } else {
            runMod(modName);
        }
    });

    function dirCb(create, path) {
        if (create)
            return function(cb) {
                mkdir(path, function() {
                    cb();
                });
            };

        return function(cb) {
            rmdir(path, function() {
                cb();
            });
        };
    }
};

function runAllDemo() {
    let callbacks = map(demoData, function(modName) {
        return function(cb) {
            return runDemo(modName, cb);
        };
    });

    waterfall(callbacks, function(err) {
        if (err) return console.log(err);

        log('All done!');
    });
}

function runAllMod() {
    let platformTests = testData[options.type === 'mocha' ? 'node' : 'browser'];
    let tests = testData.all.concat(platformTests);

    var callbacks = map(tests, function(modName) {
        return function(cb) {
            return runMod(modName, cb);
        };
    });

    if (options.type === 'karma') {
        callbacks = callbacks.concat([
            partial(readTpl, getKarmaType()),
            setTpl,
            partial(genKarmaConf, tests),
            partial(writeFile, resolvePath('karma.conf.js'))
        ]);
    }

    callbacks.push(partial(genTestUtil, tests));

    waterfall(callbacks, function(err) {
        if (err) return console.log(err);

        if (options.type === 'mocha') {
            runScript('mocha', []);
        } else {
            runScript('karma', ['start']);
        }
    });
}

function runMod(modName, cb) {
    let modPath = resolvePath('src', modName[0].toLowerCase(), modName + '.js');
    let modTestPath = modPath.replace('.js', '.test.js');
    let testOutputPath = resolvePath('test/' + modName + '.js');

    let callbacks = [
        partial(fileExist, modPath),
        partial(fileExist, modTestPath),
        partial(readTpl, options.type + '.test'),
        setTpl,
        partial(readFile, modTestPath),
        partial(genTestFile, modName),
        partial(writeFile, testOutputPath)
    ];

    if (!options.all) callbacks.push(partial(genTestUtil, modName));

    if (options.type === 'karma' && !options.all) {
        callbacks = callbacks.concat([
            partial(readTpl, getKarmaType()),
            setTpl,
            partial(genKarmaConf, modName),
            partial(writeFile, resolvePath('karma.conf.js'))
        ]);
    }

    waterfall(callbacks, function(err) {
        if (err) return console.log(err);

        if (options.all && cb) return cb();

        if (options.type === 'mocha') {
            runScript('mocha', ['test/' + modName], cb);
        } else {
            runScript('karma', ['start'], cb);
        }
    });
}

function runDemo(modName, cb) {
    let modPath = resolvePath('src', modName[0].toLowerCase(), modName + '.js');
    let modTestPath = modPath.replace('.js', 'Demo.html');
    let demoOutputPath = resolvePath('demo/' + modName + '.html');

    let callbacks = [
        partial(fileExist, modPath),
        partial(fileExist, modTestPath),
        partial(readTpl, 'demo'),
        setTpl,
        function(cb) {
            cb(null, tpls['demo']({ modName: modName }));
        },
        partial(writeFile, demoOutputPath),
        partial(genTestUtil, modName + 'Demo')
    ];

    waterfall(callbacks, function(err) {
        if (err) return console.log(err);

        log(
            'Navigate "http://localhost:3000/' +
                modName +
                '.html" to view the page:)'
        );

        cb && cb();
    });
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
            example = util.outdentOneSpace(example);
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
    waterfall([partial(readTpl, 'release.test'), setTpl], async function(err) {
        if (err) return console.log(err);

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
            data = tpls['release.test']({
                modName,
                data: indent(trim(data))
            });
            data = data.replace(
                /util\.([a-zA-Z$]*)\b/g,
                (match, modName) => `require('licia/${modName}')`
            );
            await fs.writeFile(testOutputPath, data, 'utf8');
        }

        runScript('mocha', []);
    });
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

function genTestFile(modName, data, cb) {
    cb(
        null,
        tpls[options.type + '.test']({
            modName: modName,
            utilPath: options.all ? 'util' : modName,
            data: indent(trim(data))
        })
    );
}

function genKarmaConf(modName, cb) {
    let files = '';

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

    cb(null, tpls[getKarmaType()]({ files: files }));
}

function getKarmaType() {
    return options.sauce ? 'karma.sauce' : 'karma.conf';
}

function genTestUtil(modName, cb) {
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

    eustia.build(buildOpts, function(err) {
        if (err) return cb(err);

        cb();
    });
}

let tpls = {};

function setTpl(tpl, name, cb) {
    tpls[name] = tpl;
    cb();
}
