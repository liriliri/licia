var path = require('path'),
    eustia = require('eustia');

var util = require('./util'),
    fileExist = require('./share/fileExist'),
    readFile = require('./share/readFile'),
    writeFile = require('./share/writeFile'),
    readTpl = require('./share/readTpl');

module.exports = function ()
{
    util.mkdir('benchmark', function ()
    {
        var modName = options.argv.remain[0];
        if (!modName) return console.log('A module name must be given.');

        run(modName);
    });
};

function run(modName)
{
    var modPath = resolvePath(modName[0].toLowerCase(), modName + '.js'),
        modBenchmarkPath = modPath.replace('.js', '.benchmark.js'),
        benchmarkOutputPath = resolvePath('benchmark/' + modName + '.js');

    var partial = util.partial;

    var callbacks = [
        partial(fileExist, modPath),
        partial(fileExist, modBenchmarkPath),
        partial(readTpl, 'benchmark'),
        function (tpl, name, cb) { tpls[name] = tpl; cb() },
        partial(readFile, modBenchmarkPath),
        partial(genBenchmarkFile, modName),
        partial(writeFile, benchmarkOutputPath),
        partial(genBenchmarkUtil, modName)
    ];

    util.waterfall(callbacks, function (err)
    {
        if (err) return console.log(err);

        console.log('Run "node benchmark/' + modName + '" to execute benchmark:)');
    });
}

var tpls = {};

function resolvePath()
{
    var args = util.toArr(arguments);

    args.unshift(process.cwd());

    return path.resolve.apply(path, args);
}

function genBenchmarkFile(modName, data, cb)
{
    cb(null, tpls['benchmark']({
        modName: modName,
        data: util.trim(data)
    }));
}

function genBenchmarkUtil(modName, cb)
{
    eustia.build({
        files: [],
        output: 'benchmark/' + modName + '.util\.js',
        library: '$_abcdefghijklmnopqrstuvwxyz'.split(''),
        include: modName,
        format: 'commonjs'
    }, function (err)
    {
        if (err) return cb(err);

        cb();
    });
}


