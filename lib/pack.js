var fs = require('fs'),
    path = require('path'),
    ncp = require('ncp'),
    glob = require('glob');

var util = require('./util');

module.exports = function() {
    util.rmdir('packages', function() {
        glob(
            '*/*.js',
            {
                ignore: [
                    '*node_modules/*.js',
                    '*/*.*.js',
                    '*test*/*.js',
                    '*benchmark*/*.js',
                    '*packages/*.js',
                    '*lib/*.js',
                    '*bin/*.js'
                ]
            },
            function(err, files) {
                if (err) return console.log(err);

                genPackage('eustia-module', files);
                genPackage('licia', files);
            }
        );
    });
};

function genPackage(pkgName, files) {
    util.mkdir('packages/' + pkgName, function() {
        util.parallel(genCbs(files, pkgName), function(err) {
            if (err) console.log(err);
        });

        ncp('./README.md', 'packages/' + pkgName + '/README.md', function(err) {
            if (err) console.log(err);
        });

        var packInfo = require('../package.json');
        packInfo.name = pkgName;
        util.each(['bin', 'scripts', 'devDependencies'], function(val) {
            delete packInfo[val];
        });
        fs.writeFile(
            path.resolve('packages/' + pkgName + '/package.json'),
            JSON.stringify(packInfo, null, 2),
            'utf-8',
            function(err) {
                if (err) console.log(err);
            }
        );
    });
}

function genCbs(files, pkgName) {
    var ret = [];

    util.each(files, function(file) {
        var modName = util.last(file.split('/')).slice(0, -3);

        ret.push(function(cb) {
            fs.readFile(file, 'utf-8', function(err, data) {
                if (err) return cb(err);

                if (pkgName === 'eustia-module') {
                    fs.writeFile(
                        path.resolve('./packages/' + pkgName, modName + '.js'),
                        data,
                        'utf-8',
                        function(err) {
                            if (err) return cb(err);

                            cb();
                        }
                    );
                } else {
                    data = transToCommonjs(data);

                    fs.writeFile(
                        path.resolve('./packages/' + pkgName, modName + '.js'),
                        data,
                        'utf-8',
                        function(err) {
                            if (err) return cb(err);

                            cb();
                        }
                    );
                }
            });
        });
    });

    return ret;
}

var regDependence = /\s*\b_\(\s*['"]([\w\s\$]+)['"]\s*\);?/m;

function transToCommonjs(data) {
    var dependencies = data.match(regDependence);

    data = util.trim(data);
    data += '\n\nmodule.exports = exports;\n';

    if (!dependencies) return data;

    dependencies = dependencies[1].split(/\s+/g);

    var requires = '',
        len = dependencies.length;

    util.each(dependencies, function(val, i) {
        requires += '    ' + val + " = require('./" + val + "')";

        if (i !== len - 1) requires += ',\n';
    });

    requires = '\n\nvar ' + util.trim(util.trim(requires), ', ') + ';';

    data = data.replace(regDependence, requires);

    return data;
}
