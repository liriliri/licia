var path = require('path'),
    fs = require('fs'),
    handlebars = require('handlebars'),
    eustia = require('eustia'),
    nopt = require('nopt'),
    async = require('async');

var util = require('./util');

var options = {
    type: 'mocha'
};

function main()
{
    readOpts();
    var modName = options.argv.remain[0];
    if (!modName) return console.log('A module name must be given.');

    var modPath = resolvePath(modName[0].toLowerCase(), modName + '.js'),
        modTestPath = modPath.replace('.js', '.test.js'),
        testOutputPath = resolvePath('test/' + modName + '.' + options.type + '.js');

    var partial = util.partial;

    var callbacks = [
        partial(fileExist, modPath),
        partial(fileExist, modTestPath),
        partial(readTpl, options.type + '.test'),
        partial(readFile, modTestPath),
        partial(genTestFile, modName),
        partial(writeFile, testOutputPath),
        partial(genTestUtil, modName)
    ];

    if (options.type === 'karma')
    {
        callbacks = callbacks.concat([
            partial(readTpl, 'karma.conf'),
            partial(genKarmaConf, modName),
            partial(writeFile, resolvePath('karma.conf.js'))
        ]);
    }

    async.waterfall(callbacks, function (err)
    {
        if (err) return console.log(err);

        console.log('Run "' + (options.type === 'mocha' ? 'mocha test/' + modName + '.mocha' : 'karma start') +
                    '" to execute test:)');
    });
}

function resolvePath()
{
    var args = util.toArr(arguments);

    args.unshift(__dirname);

    return path.resolve.apply(path, args);
}

function genTestFile(modName, data, cb)
{
    cb(null, tpl[options.type + '.test']({
        modName: modName,
        data: util.indent(util.trim(data))
    }));
}

function genKarmaConf(modName, cb)
{
    cb(null, tpl['karma.conf']({
        modName: modName
    }));
}

function genTestUtil(modName, cb)
{
    eustia.build({
        files: [],
        output: 'test/' + modName + '.util\.js',
        library: '$_abcdefghijklmnopqrstuvwxyz'.split(''),
        include: modName,
        format: options.type === 'mocha' ? 'commonjs' : 'global'
    }, function (err)
    {
        if (err) return cb(err);

        cb();
    });
}

var tpl = {};

function readTpl(name, cb)
{
    fs.readFile('./' + name + '.hbs', 'utf-8', function (err, data)
    {
        if (err) return cb(err);

        tpl[name] = handlebars.compile(data);

        cb();
    });
}

function fileExist(path, cb)
{
    fs.exists(path, function (exist)
    {
        exist ? cb() : cb(new Error(path + ' doesn\'t not exist.'));
    });
}

function readFile(path, cb)
{
    fs.readFile(path, 'utf-8', function (err, data)
    {
        if (err) return cb(err);

        cb(null, data);
    });
}

function writeFile(path, data, cb)
{
    fs.writeFile(path, data, 'utf-8', function (err)
    {
        if (err) return cb(err);

        cb();
    });
}

function readOpts()
{
    options = util.defaults(nopt({
        karma: Boolean
    }, {
        k: '--karma'
    }, process.argv, 2), options);

    if (options.karma) options.type = 'karma';
}

main();
