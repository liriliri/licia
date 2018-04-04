var path = require('path'),
    fs = require('fs'),
    rmdir = require('rmdir'),
    handlebars = require('handlebars'),
    eustia = require('eustia'),
    comTranspiler = require('eustia-component');

var util = require('./util'),
    readTpl = require('./helper/readTpl'),
    runScript = require('./helper/runScript'),
    readFile = require('./helper/readFile'),
    writeFile = require('./helper/writeFile'),
    fileExist = require('./helper/fileExist'),
    modData = require('../index.json');

var demoData = [],
    testData = {
        all: [],
        browser: [],
        node: [],
        manual: []
    };

util.each(modData, function (val, key) 
{
    if (val.demo) demoData.push(key);
    if (val.test) testData[val.test].push(key);
});   

module.exports = function ()
{
    var callbacks = [];

    if (options.demo)
    {
        callbacks.push(dirCb(true, 'demo'));
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
        if (options.browser) options.type = 'karma';
        if (options.all) return options.demo ? runAllDemo() : runAllMod();

        var modName = options.argv.remain[0];
        if (!modName) return console.log('A module name must be given.');
        options.demo ? runDemo(modName) : runMod(modName);
    });

    function dirCb(create, path)
    {
        if (create) return function (cb) { util.mkdir(path, function () { cb() }) };

        return function (cb) { rmdir(path, function () { cb() }) };
    }
};

function runAllDemo()
{
    var callbacks = util.map(demoData, function (modName) 
    {
        return function (cb) 
        {
            return runDemo(modName, cb);
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

        if (options.type === 'mocha') 
        {
            runScript('mocha', []);
        } else 
        {
            runScript('karma', ['start']);
        }
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

        if (options.all && cb) return cb();

        if (options.type === 'mocha') 
        {
            runScript('mocha', ['test/' + modName], cb);
        } else 
        {
            runScript('karma', ['start'], cb);
        }
    });
}

function runDemo(modName, cb)
{
    var modPath = resolvePath(modName[0].toLowerCase(), modName + '.js'),
        modTestPath = modPath.replace('.js', 'Demo.html'),
        demoOutputPath = resolvePath('demo/' + modName + '.html');

    var partial = util.partial;

    var callbacks = [
        partial(fileExist, modPath),
        partial(fileExist, modTestPath),
        partial(readTpl, 'demo'),
        setTpl,
        function (cb)
        {
            cb(null, tpls['demo']({modName: modName}));
        },
        partial(writeFile, demoOutputPath),
        partial(genTestUtil, modName + 'Demo')
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
    var outputDir = options.demo ? 'demo' : 'testUtil',
        format = 'global';

    if (options.type === 'mocha' && !options.demo) format = 'commonjs';
    
    var output = outputDir + '/' + (options.all && !options.demo ? 'util' : modName) + '.js';
    if (options.demo) output = output.replace('Demo.js', '.js');

    var buildOpts = {
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
    };

    if (!options.demo) {
        modName = util.toArr(modName);
        var files = [];
        util.each(modName, function (modName) 
        {
            files.push(resolvePath(modName[0] + '/' + modName + '.test.js'));
        });
        buildOpts.files = files;
    }

    eustia.build(buildOpts, function (err)
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
