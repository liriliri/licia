var fs = require('fs'),
    async = require('async'),
    util = require('./util'),
    path = require('path'),
    glob = require('glob');

glob('*/*.js', {
    ignore: [
        '*/*.*.js',
        '*test/*.js',
        '*npm/*.js'
    ]
}, function (err, files)
{
    if (err) return console.log(err);

    util.mkdir('npm/eustia', function () { main(files) });
});

function main(files)
{
    async.parallel(genCbs(files), function (err)
    {
        if (err) console.log(err);
    });
}

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

    async.waterfall([
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

    requires = '\n\nvar ' + util.trim(requires, ', \\n') + ';';

    data = data.replace(regDependence, requires);

    return data;
}