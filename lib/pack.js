const fs = require('fs');
const path = require('path');
const ncp = require('ncp');
const glob = require('glob');
const babel = require('@babel/core');

const modData = require('../index.json');
let util = require('./util');

module.exports = function() {
    util.rmdir('packages', function() {
        glob(
            '*/*.js',
            {
                ignore: [
                    '*node_modules/*.js',
                    '*/*.*.js',
                    '*test*/*.js',
                    '*demo/*.js',
                    '*benchmark*/*.js',
                    '*packages/*.js',
                    '*lib/*.js',
                    '*bin/*.js',
                    '*script/*.js'
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

        let packInfo = require('../package.json');
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
    let ret = [];

    util.each(files, function(file) {
        let modName = util.last(file.split('/')).slice(0, -3);

        ret.push(function(cb) {
            fs.readFile(file, 'utf-8', async function(err, data) {
                if (err) return cb(err);

                const env = modData[modName].env;
                if (env === 'browser' || env === 'all') {
                    data = await transBabel(data);
                }

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

const regDependence = /\s*\b_\(\s*['"]([\w\s\$]+)['"]\s*\);?/m;

function transToCommonjs(data) {
    let dependencies = data.match(regDependence);

    data = util.trim(data);
    data += '\n\nmodule.exports = exports;\n';

    if (!dependencies) return data;

    dependencies = dependencies[1].split(/\s+/g);

    let requires = '';
    let len = dependencies.length;

    util.each(dependencies, function(val, i) {
        requires += 'const ' + val + " = require('./" + val + "');";

        if (i !== len - 1) requires += '\n';
    });

    if (requires) {
        requires = '\n\n' + requires;
    }

    data = data.replace(regDependence, requires);

    return data;
}

function transBabel(data) {
    return new Promise((resolve, reject) => {
        babel.transform(
            data,
            {
                presets: [['@babel/preset-env', { modules: false }]],
                plugins: []
            },
            function(err, result) {
                if (err) {
                    return reject(err);
                }
                resolve(result.code);
            }
        );
    });
}
