var path = require('path'),
    fs = require('fs'),
    rmdir = require('rmdir'),
    handlebars = require('handlebars'),
    eustia = require('eustia'),
    nopt = require('nopt'),
    comTranspiler = require('eustia-component');

var util = require('./util'),
    readTpl = require('./share/readTpl'),
    readFile = require('./share/readFile'),
    writeFile = require('./share/writeFile'),
    fileExist = require('./share/fileExist'),
    demoData = require('../demo.json'),
    testData = require('../test.json');

module.exports = function ()
{
    var callbacks = [];

    if (options.html)
    {
        callbacks.push(dirCb(true, 'testHtml'));
    } else
    {
        callbacks = [
            dirCb(false, 'test'),
            dirCb(false, 'testUtil'),
            dirCb(true, 'test'),
            dirCb(true, 'testUtil')
        ];
    }

    util.waterfall(callbacks, function ()
    {
        util.defaults(options, {
            type: 'mocha'
        });
        if (options.karma) options.type = 'karma';
        if (options.all) return options.html ? runAllHtml() : runAllMod();

        var modName = options.argv.remain[0];
        if (!modName) return console.log('A module name must be given.');
        options.html ? runHtml(modName) : runMod(modName);
    });

    function dirCb(create, path)
    {
        if (create) return function (cb) { util.mkdir(path, function () { cb() }) };

        return function (cb) { rmdir(path, function () { cb() }) };
    }
};

function runAllHtml()
{
    var callbacks = util.map(demoData, function (modName) 
    {
        return function (cb) 
        {
            return runHtml(modName, cb);
        };
    });

    util.waterfall(callbacks, function (err)
    {
        if (err) return console.log(err);

        log('All done!');
    });
}

function runAllMod() 
{
    var platformTests = testData[options.type === 'mocha' ? 'node' : 'browser'],
        tests = testData.all.concat(platformTests);

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
            setTpl,
            partial(genKarmaConf, tests),
            partial(writeFile, resolvePath('karma.conf.js'))
        ]);
    }

    callbacks.push(partial(genTestUtil, tests));

    util.waterfall(callbacks, function (err)
    {
        if (err) return console.log(err);

        log('All done!');
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
        setTpl,
        partial(readFile, modTestPath),
        partial(genTestFile, modName),
        partial(writeFile, testOutputPath)
    ];

    if (!options.all) callbacks.push(partial(genTestUtil, modName));

    if (options.type === 'karma' && !options.all)
    {
        callbacks = callbacks.concat([
            partial(readTpl, getKarmaType()),
            setTpl,
            partial(genKarmaConf, modName),
            partial(writeFile, resolvePath('karma.conf.js'))
        ]);
    }

    util.waterfall(callbacks, function (err)
    {
        if (err) return console.log(err);

        log('Run "' + (options.type === 'mocha' ? 'mocha test/' + modName : 'karma start') +
            '" to execute test:)');

        cb && cb();
    });
}

function runHtml(modName, cb)
{
    var modPath = resolvePath(modName[0].toLowerCase(), modName + '.js'),
        modTestPath = modPath.replace('.js', 'Test.html'),
        htmlOutputPath = resolvePath('testHtml/' + modName + '.html');

    var partial = util.partial;

    var callbacks = [
        partial(fileExist, modPath),
        partial(fileExist, modTestPath),
        partial(readTpl, 'html'),
        setTpl,
        function (cb)
        {
            cb(null, tpls['html']({modName: modName}));
        },
        partial(writeFile, htmlOutputPath),
        partial(genTestUtil, modName + 'Test')
    ];

    util.waterfall(callbacks, function (err)
    {
        if (err) return console.log(err);

        log('Navigate "http://localhost:3000/' + modName + '.html" to view the page:)');

        cb && cb();
    });
}

function log()
{
    if (options.silent) return;

    console.log.apply(null, arguments);
}

function resolvePath()
{
    var args = util.toArr(arguments);

    args.unshift(process.cwd());

    return path.resolve.apply(path, args);
}

function genTestFile(modName, data, cb)
{
    cb(null, tpls[options.type + '.test']({
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
        files += '\'testUtil/util\.js\', ';
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

    cb(null, tpls[getKarmaType()]({files: files}));
}

function getKarmaType()
{
    return options.sauce ? 'karma.sauce' : 'karma.conf';
}

function genTestUtil(modName, cb)
{
    var outputDir = options.html ? 'testHtml' : 'testUtil',
        format = 'global';

    if (options.type === 'mocha' && !options.html) format = 'commonjs';
    
    var output = outputDir + '/' + (options.all && !options.html ? 'util' : modName) + '.js';

    eustia.build({
        files: [],
        output: output,
        extension: ['js', 'html'],
        library: '$_abcdefghijklmnopqrstuvwxyz'.split(''),
        include: modName,
        format: format,
        namespace: 'util',
        transpiler: [
            {
                test: /\.html$/,
                handler: comTranspiler()
            }
        ]
    }, function (err)
    {
        if (err) return cb(err);

        cb();
    });
}

var tpls = {};

function setTpl(tpl, name, cb)
{
    tpls[name] = tpl;
    cb();
}
