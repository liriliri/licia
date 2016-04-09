var path = require('path'),
    fs = require('fs'),
    eustia = require('eustia'),
    async = require('async');

main();

function main()
{
    var modName = readModName();
    if (!modName) return console.log('A module name must be given.');

    var modPath = path.resolve(__dirname, modName[0], modName + '.js'),
        modTestPath = modPath.replace('.js', '.test.js'),
        testOutputPath = path.resolve(__dirname, 'test.js');

    async.waterfall([
        fileExist.bind(null, modPath),
        fileExist.bind(null, modTestPath),
        readFile.bind(null, modTestPath),
        wrapTestFile.bind(null, modName),
        writeFile.bind(null, testOutputPath),
        genTestUtil.bind(null, modName)
    ], function (err)
    {
        if (err) return console.log(err);

        console.log('Run "node test" to execute test:)');
    });
}

function readModName()
{
    var argv = process.argv;

    if (argv.length < 3) return;

    return argv[2];
}

function wrapTestFile(modName, data, cb)
{
    cb(null, [
        'var util = require("./test.util"),',
        '    test = require("tape");\n',
        'var ' + modName + ' = util.' + modName + ';\n',
        'test("' + modName +'", function (assert) {\n',
        data,
        '});'
    ].join('\n'));
}

function genTestUtil(modName, cb)
{
    eustia.build({
        files: [],
        output: 'test.util\.js',
        library: '$_abcdefghijklmnopqrstuvwxyz'.split(''),
        include: modName
    }, function (err)
    {
        if (err) return cb(err);

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


