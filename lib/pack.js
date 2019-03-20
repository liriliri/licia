const path = require('path');
const babel = require('@babel/core');
const {
    each,
    fs,
    last,
    trim,
    extractBlockCmts,
    startWith,
    stripCmt
} = require('licia');

const modData = require('../index.json');
const { outdentOneSpace, rmdir, glob, mkdir, cpFile } = require('./util');

module.exports = async function() {
    try {
        await rmdir('packages');
    } catch (e) {}
    const files = await glob('src/*/*.js', {
        ignore: ['src/*/*.*.js']
    });

    try {
        await genPackage('eustia-module', files);
        await genPackage('licia', files);
    } catch (e) {
        console.log(e);
    }
};

async function genPackage(pkgName, files) {
    await mkdir('packages/' + pkgName);
    for (const file of files) {
        await genFile(file, pkgName);
    }
    await cpFile('./README.md', 'packages/' + pkgName + '/README.md');

    let packInfo = require('../package.json');
    packInfo.name = pkgName;
    each(['bin', 'scripts', 'devDependencies'], function(val) {
        delete packInfo[val];
    });

    if (pkgName === 'licia') {
        packInfo.main = './node.js';
        packInfo.browser = './browser.js';
        await genIndex();
    }

    await fs.writeFile(
        path.resolve('packages/' + pkgName + '/package.json'),
        JSON.stringify(packInfo, null, 2),
        'utf8'
    );
}

async function genIndex() {
    const mods = {
        browser: [],
        node: []
    };

    each(modData, (mod, modName) => {
        if (mod.env === 'browser') {
            mods.browser.push(modName);
        } else if (mod.env === 'node') {
            mods.node.push(modName);
        } else {
            mods.browser.push(modName);
            mods.node.push(modName);
        }
    });

    for (const type of ['browser', 'node']) {
        const modNames = mods[type];
        let data = '';
        each(modNames, name => {
            data += `exports.${name} = require('./${name}');\n`;
        });
        await fs.writeFile(
            path.resolve(`packages/licia/${type}.js`),
            data,
            'utf8'
        );
    }
}

async function genFile(file, pkgName) {
    let modName = last(file.split('/')).slice(0, -3);

    let data = await fs.readFile(file, 'utf8');

    const env = modData[modName].env;
    if (env === 'browser' || env === 'all') {
        data = await transBabel(data);
    }

    data = data.replace(/\/\* module[\s\S]*?\*\//m, '');

    if (pkgName === 'eustia-module') {
        await fs.writeFile(
            path.resolve('./packages/' + pkgName, modName + '.js'),
            data,
            'utf-8'
        );
    } else {
        const dependencies = extractDependencies(data);
        data = transToCommonjs(data, dependencies);

        const tsDefinition = extractTsDefinition(data, modName, dependencies);
        if (tsDefinition) {
            await fs.writeFile(
                path.resolve('./packages/' + pkgName, modName + '.d.ts'),
                tsDefinition,
                'utf-8'
            );
        }

        data = stripCmt(data);
        await fs.writeFile(
            path.resolve('./packages/' + pkgName, modName + '.js'),
            data,
            'utf-8'
        );
    }
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
            tsDefinition = outdentOneSpace(tsDefinition);
            tsDefinition = tsDefinition.replace(/export declare/g, 'declare');
            tsDefinition += '\n\nexport = ' + modName;
        }
    });

    if (imports) {
        tsDefinition = imports + '\n\n' + tsDefinition;
    }

    return tsDefinition;
}
