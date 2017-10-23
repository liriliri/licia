var fs = require('fs'),
    path = require('path'),
    rmdir = require('rmdir'),
    ncp = require('ncp'),
    glob = require('glob');

var util = require('./util');

module.exports = function ()
{
    rmdir('npm', function ()
    {
        glob('*/*.js', {
            ignore: [
                '*/*.*.js',
                '*test*/*.js',
                '*benchmark*/*.js',
                '*npm/*.js',
                '*lib/*.js',
                '*bin/*.js'
            ]
        }, function (err, files)
        {
            if (err) return console.log(err);

            util.mkdir('npm/eustia', function ()
            {
                util.parallel(genCbs(files), function (err)
                {
                    if (err) console.log(err);
                });

                ncp('./README.md', 'npm/README.md', function (err) 
                {
                    if (err) console.log(err);
                });

                var packInfo = require('../package.json');
                packInfo.name = 'eustia-module';
                util.each(['bin', 'scripts', 'devDependencies'], function (val) 
                {
                    delete packInfo[val];
                });
                fs.writeFile(path.resolve('npm/package.json'), JSON.stringify(packInfo, null, 2), 'utf-8', function (err) 
                {
                    if (err) console.log(err);
                });
            });
        });
    });
};

function genCbs(files)
{
    var ret = [];

    util.each(files, function (file)
    {
        var modName = util.last(file.split('/')).slice(0, -3);

        ret.push(function (cb)
        {
            fs.readFile(file, 'utf-8', function (err, data)
            {
                if (err) return cb(err);

                processFile(data, modName, cb);
            });
        });
    });

    return ret;
}

function processFile(data, modName, cb)
{

    util.waterfall([
        function (cb)
        {
            fs.writeFile(path.resolve('./npm/eustia', modName + '.js'), data, 'utf-8', function (err)
            {
                if (err) return cb(err);

                cb();
            });
        },
        function (cb)
        {
            data = transToCommonjs(data);

            fs.writeFile(path.resolve('./npm', modName + '.js'), data, 'utf-8', function (err)
            {
                if (err) return cb(err);

                cb();
            });
        }
    ], function (err)
    {
        if (err) return cb(err);

        cb();
    });
}

var regDependence = /\s*\b_\(['"]([\w\s\$]+)['"]\);?/;

function transToCommonjs(data)
{
    var dependencies = data.match(regDependence);

    data = util.trim(data);
    data += '\n\nmodule.exports = exports;\n';

    if (!dependencies) return data;

    dependencies = dependencies[1].split(/\s+/g);

    var requires = '',
        len = dependencies.length;

    util.each(dependencies, function (val, i)
    {
        requires += '    ' + val + ' = require(\'./' + val + '\')';

        if (i !== len - 1) requires += ',\n';
    });

    requires = '\n\nvar ' + util.trim(util.trim(requires), ', ') + ';';

    data = data.replace(regDependence, requires);

    return data;
}