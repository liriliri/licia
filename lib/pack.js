const path = require('path');
const ncp = require('ncp');
const glob = require('glob');
const babel = require('@babel/core');
const rmdir = require('licia/rmdir');
const mkdir = require('licia/mkdir');
const parallel = require('licia/parallel');
const each = require('licia/each');
const fs = require('licia/fs');
const last = require('licia/last');
const trim = require('licia/trim');
const extractBlockCmts = require('licia/extractBlockCmts');
const startWith = require('licia/startWith');

const modData = require('../index.json');
let util = require('./util');

module.exports = function() {
    rmdir('packages', function() {
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

function mkdirp(dir) {
    return new Promise((resolve, reject) => {
        mkdir(dir, function(err) {
            if (err) {
                return reject(err);
            }

            resolve();
        });
    });
}

function genFiles(files, pkgName) {
    return new Promise((resolve, reject) => {
        parallel(genCbs(files, pkgName), function(err) {
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
    await mkdirp('packages/' + pkgName);
    await genFiles(files, pkgName);
    await cpFile('./README.md', 'packages/' + pkgName + '/README.md');

    let packInfo = require('../package.json');
    packInfo.name = pkgName;
    each(['bin', 'scripts', 'devDependencies'], function(val) {
        delete packInfo[val];
    });

    await fs.writeFile(
        path.resolve('packages/' + pkgName + '/package.json'),
        JSON.stringify(packInfo, null, 2),
        'utf-8'
    );
}

function genCbs(files, pkgName) {
    let ret = [];

    each(files, function(file) {
        let modName = last(file.split('/')).slice(0, -3);

        ret.push(async function(cb) {
            let data = await fs.readFile(file, 'utf8');

            const env = modData[modName].env;
            if (env === 'browser' || env === 'all') {
                data = await transBabel(data);
            }

            if (pkgName === 'eustia-module') {
                await fs.writeFile(
                    path.resolve('./packages/' + pkgName, modName + '.js'),
                    data,
                    'utf-8'
                );
            } else {
                const dependencies = extractDependencies(data);
                data = transToCommonjs(data, dependencies);

                await fs.writeFile(
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
                    await fs.writeFile(
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

    return ret;
}

function transToCommonjs(data, dependencies) {
    data = trim(data);
    data += '\n\nmodule.exports = exports;\n';

    if (!dependencies) return data;

    let requires = '';
    const len = dependencies.length;

    each(dependencies, (val, i) => {
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
    const comments = extractBlockCmts(data);

    let imports = '';

    if (dependencies) {
        const len = dependencies.length;
        each(dependencies, (val, i) => {
            imports += 'import ' + val + " = require('./" + val + "');";

            if (i !== len - 1) imports += '\n';
        });
    }

    let tsDefinition = '';

    each(comments, comment => {
        comment = trim(comment);
        if (startWith(comment, 'typescript')) {
            tsDefinition = comment.replace(/^typescript/, '');
            tsDefinition = util.outdentOneSpace(tsDefinition);
            tsDefinition = tsDefinition.replace(/export declare/g, 'declare');
            tsDefinition += '\n\nexport = ' + modName;
        }
    });

    if (imports) {
        tsDefinition = imports + '\n\n' + tsDefinition;
    }

    return tsDefinition;
}
