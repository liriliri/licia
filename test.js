var path = require('path'),
    fs = require('fs'),
    rmdir = require('rmdir'),
    handlebars = require('handlebars'),
    eustia = require('eustia'),
    nopt = require('nopt'),
    async = require('async');

var util = require('./util'),
    testData = require('./test.json');

var options = {
    type: 'mocha'
};

function main()
{
    readOpts();
    if (options.all) return runAll();

    var modName = options.argv.remain[0];
    if (!modName) return console.log('A module name must be given.');
    runMod(modName);
}

function runAll()
{
    var tests = testData[options.type];

    var callbacks = util.map(tests, function (modName)
    {
        return function (cb)
        {
            return runMod(modName, cb)
        };
    });

    var partial = util.partial;

    if (options.type === 'karma')
    {
        callbacks = callbacks.concat([
            partial(readTpl, getKarmaType()),
            partial(genKarmaConf, tests),
            partial(writeFile, resolvePath('karma.conf.js'))
        ]);
    }

    callbacks.push(partial(genTestUtil, tests));

    async.waterfall(callbacks, function (err)
    {
        if (err) return console.log(err);

        if (options.silent) return;

        console.log('All done!');
    });
}

function runMod(modName, cb)
{
    var modPath = resolvePath(modName[0].toLowerCase(), modName + '.js'),
        modTestPath = modPath.replace('.js', '.test.js'),
        testOutputPath = resolvePath('test/' + modName + '.js');

    var partial = util.partial;

    var callbacks = [
        partial(fileExist, modPath),
        partial(fileExist, modTestPath),
        partial(readTpl, options.type + '.test'),
        partial(readFile, modTestPath),
        partial(genTestFile, modName),
        partial(writeFile, testOutputPath)
    ];

    if (!options.all) callbacks.push(partial(genTestUtil, modName));

    if (options.type === 'karma' && !options.all)
    {
        callbacks = callbacks.concat([
            partial(readTpl, getKarmaType()),
            partial(genKarmaConf, modName),
            partial(writeFile, resolvePath('karma.conf.js'))
        ]);
    }

    async.waterfall(callbacks, function (err)
    {
        if (err) return console.log(err);

        if (!options.silent)
        {
            console.log('Run "' + (options.type === 'mocha' ? 'mocha test/' + modName : 'karma start') +
                        '" to execute test:)');
        }

        cb && cb();
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
        utilPath: options.all ? 'util' : modName,
        data: util.indent(util.trim(data))
    }));
}

function genKarmaConf(modName, cb)
{
    var files = '';

    if (options.all)
    {
        files += '\'testUtil/util.js\', ';
        for (var i = 0, len = modName.length; i < len; i++)
        {
            files += '\'test/' + modName[i] + '.js\', ';
        }
        files = util.rtrim(files, ', ');
    } else
    {
        files += '\'testUtil/' + modName + '.js\', ';
        files += '\'test/' + modName + '.js\'';
    }

    cb(null, tpl[getKarmaType()]({files: files}));
}

function getKarmaType()
{
    return options.sauce ? 'karma.sauce' : 'karma.conf';
}

function genTestUtil(modName, cb)
{
    eustia.build({
        files: [],
        output: 'testUtil/' + (options.all ? 'util' : modName) + '.js',
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
        karma: Boolean,
        silent: Boolean,
        all: Boolean,
        sauce: Boolean
    }, {
        k: '--karma',
        s: '--silent',
        a: '--all'
    }, process.argv, 2), options);

    if (options.karma) options.type = 'karma';
}

async.waterfall([
    function (cb)
    {
        rmdir('test', function () { cb() });
    },
    function (cb)
    {
        rmdir('testUtil', function () { cb() });
    },
    function (cb)
    {
        util.mkdir('test', function () { cb() });
    },
    function (cb)
    {
        util.mkdir('testUtil', function () { cb() });
    }
], function ()
{
    main();
});

