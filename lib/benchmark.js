const path = require('path');
const eustia = require('eustia');
const mkdir = require('licia/mkdir');
const partial = require('licia/partial');
const waterfall = require('licia/waterfall');
const toArr = require('licia/toArr');
const trim = require('licia/trim');

const fileExist = require('./helper/fileExist');
const readFile = require('./helper/readFile');
const writeFile = require('./helper/writeFile');
const runSript = require('./helper/runScript');
const readTpl = require('./helper/readTpl');

module.exports = function() {
    mkdir('benchmark', function() {
        let modName = options.argv.remain[0];
        if (!modName) return console.log('A module name must be given.');

        run(modName);
    });
};

function run(modName) {
    let modPath = resolvePath('src', modName[0].toLowerCase(), modName + '.js');
    let modBenchmarkPath = modPath.replace('.js', '.benchmark.js');
    let benchmarkOutputPath = resolvePath('benchmark/' + modName + '.js');

    let callbacks = [
        partial(fileExist, modPath),
        partial(fileExist, modBenchmarkPath),
        partial(readTpl, 'benchmark'),
        function(tpl, name, cb) {
            tpls[name] = tpl;
            cb();
        },
        partial(readFile, modBenchmarkPath),
        partial(genBenchmarkFile, modName),
        partial(writeFile, benchmarkOutputPath),
        partial(genBenchmarkUtil, modName, modBenchmarkPath)
    ];

    waterfall(callbacks, function(err) {
        if (err) return console.log(err);

        runSript('benchmark', ['benchmark/' + modName]);
    });
}

let tpls = {};

function resolvePath() {
    let args = toArr(arguments);

    args.unshift(process.cwd());

    return path.resolve.apply(path, args);
}

function genBenchmarkFile(modName, data, cb) {
    cb(
        null,
        tpls['benchmark']({
            modName: modName,
            data: trim(data)
        })
    );
}

function genBenchmarkUtil(modName, modBenchmarkPath, cb) {
    eustia.build(
        {
            files: modBenchmarkPath,
            output: 'benchmark/' + modName + '.util.js',
            library: '$_abcdefghijklmnopqrstuvwxyz'
                .split('')
                .map(val => 'src/' + val),
            include: modName,
            namespace: 'util',
            format: 'commonjs'
        },
        function(err) {
            if (err) return cb(err);

            cb();
        }
    );
}
