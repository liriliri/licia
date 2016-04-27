var path = require('path'),
    fs = require('fs'),
    handlebars = require('handlebars'),
    eustia = require('eustia'),
    async = require('async');

var util = require('./util');

function main()
{
    var modName = readModName();
    if (!modName) return console.log('A module name must be given.');

    var modPath = path.resolve(__dirname, modName[0].toLowerCase(), modName + '.js'),
        modTestPath = modPath.replace('.js', '.test.js'),
        testOutputPath = path.resolve(__dirname, 'test/' + modName + '.js');

    async.waterfall([
        fileExist.bind(null, modPath),
        fileExist.bind(null, modTestPath),
        readTpl.bind(null, 'mocha.test'),
        readFile.bind(null, modTestPath),
        genTestFile.bind(null, modName),
        writeFile.bind(null, testOutputPath),
        genTestUtil.bind(null, modName)
    ], function (err)
    {
        if (err) return console.log(err);

        console.log('Run "mocha" to execute test:)');
    });
}

function readModName()
{
    var argv = process.argv;

    if (argv.length < 3) return;

    return argv[2];
}

function genTestFile(modName, data, cb)
{
    cb(null, tpl['mocha.test']({
        modName: modName,
        data: util.indent(data)
    }));
}

function genTestUtil(modName, cb)
{
    eustia.build({
        files: [],
        output: 'test/' + modName + '.util\.js',
        library: '$_abcdefghijklmnopqrstuvwxyz'.split(''),
        include: modName
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

main();
