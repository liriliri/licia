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
            'src/*/*.js',
            {
                ignore: ['src/*/*.*.js']
            },
            async function(err, files) {
                if (err) return console.log(err);

                try {
                    await genPackage('eustia-module', files);
                    await genPackage('licia', files);
                } catch (e) {
                    console.log(e);
                }
            }
        );
    });
};

function mkdir(dir) {
    return new Promise((resolve, reject) => {
        util.mkdir(dir, function(err) {
            if (err) {
                return reject(err);
            }

            resolve();
        });
    });
}

function genFiles(files, pkgName) {
    return new Promise((resolve, reject) => {
        util.parallel(genCbs(files, pkgName), function(err) {
            if (err) {
                return reject(err);
            }

            resolve();
        });
    });
}

function cpFile(src, dist) {
    return new Promise((resolve, reject) => {
        ncp(src, dist, function(err) {
            if (err) {
                return reject(err);
            }

            resolve();
        });
    });
}

async function genPackage(pkgName, files) {
    await mkdir('packages/' + pkgName);
    await genFiles(files, pkgName);
    await cpFile('./README.md', 'packages/' + pkgName + '/README.md');

    let packInfo = require('../package.json');
    packInfo.name = pkgName;
    util.each(['bin', 'scripts', 'devDependencies'], function(val) {
        delete packInfo[val];
    });

    await util.fs.writeFile(
        path.resolve('packages/' + pkgName + '/package.json'),
        JSON.stringify(packInfo, null, 2),
        'utf-8'
    );
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
                    await util.fs.writeFile(
                        path.resolve('./packages/' + pkgName, modName + '.js'),
                        data,
                        'utf-8'
                    );
                } else {
                    const dependencies = extractDependencies(data);
                    data = transToCommonjs(data, dependencies);

                    await util.fs.writeFile(
                        path.resolve('./packages/' + pkgName, modName + '.js'),
                        data,
                        'utf-8'
                    );

                    const tsDefinition = extractTsDefinition(
                        data,
                        modName,
                        dependencies
                    );
                    if (tsDefinition) {
                        await util.fs.writeFile(
                            path.resolve(
                                './packages/' + pkgName,
                                modName + '.d.ts'
                            ),
                            tsDefinition,
                            'utf-8'
                        );
                    }
                }

                cb();
            });
        });
    });

    return ret;
}

function transToCommonjs(data, dependencies) {
    data = util.trim(data);
    data += '\n\nmodule.exports = exports;\n';

    if (!dependencies) return data;

    let requires = '';
    const len = dependencies.length;

    util.each(dependencies, (val, i) => {
        requires += 'const ' + val + " = require('./" + val + "');";

        if (i !== len - 1) requires += '\n';
    });

    if (requires) {
        requires = '\n\n' + requires;
    }

    data = data.replace(regDependence, requires);

    return data;
}

const regDependence = /\s*\b_\(\s*['"]([\w\s\$]+)['"]\s*\);?/m;

function extractDependencies(data) {
    const dependencies = data.match(regDependence);

    if (dependencies) {
        return dependencies[1].split(/\s+/g);
    }
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

function extractTsDefinition(data, modName, dependencies) {
    const comments = util.extractBlockCmts(data);

    let imports = '';

    if (dependencies) {
        const len = dependencies.length;
        util.each(dependencies, (val, i) => {
            imports += 'import ' + val + " = require('./" + val + "');";

            if (i !== len - 1) imports += '\n';
        });
    }

    let tsDefinition = '';

    util.each(comments, comment => {
        comment = util.trim(comment);
        if (util.startWith(comment, 'typescript')) {
            tsDefinition = comment.replace(/^typescript/, '');
            tsDefinition = indentOneSpace(tsDefinition);
            tsDefinition = tsDefinition.replace(/export declare/g, 'declare');
            tsDefinition += '\n\nexport = ' + modName;
        }
    });

    if (imports) {
        tsDefinition = imports + '\n\n' + tsDefinition;
    }

    return tsDefinition;
}

const regStartOneSpace = /^ /gm;

function indentOneSpace(data) {
    return data.replace(regStartOneSpace, '');
}
