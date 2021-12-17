const path = require('path');
const babel = require('@babel/core');
const { each, fs, last, trim, stripCmt, contain, filter } = require('licia');
const { extractComment } = require('./util');

const modData = require('../index.json');
const {
    rmdir,
    glob,
    mkdir,
    cpFile,
    regDependencies,
    extractDependencies
} = require('./util');

module.exports = async function() {
    try {
        await rmdir('packages');
    } catch (e) {
        /* eslint-disable no-empty */
    }
    const files = await glob('src/*.js');

    try {
        await genPackage('licia-src', files);
        await genPackage('eustia-module', files);
        await genPackage('licia', files);
        await genPackage('licia-es', files);
        await genPackage('miniprogram-licia', files);
    } catch (e) {
        console.log(e);
        return;
    }
};

async function genPackage(pkgName, files) {
    await mkdir('packages/' + pkgName);
    if (pkgName === 'miniprogram-licia') {
        await mkdir(`packages/${pkgName}/miniprogram_dist`);
    }
    for (const file of files) {
        await genFile(file, pkgName);
    }
    await cpFile('./README.md', '.licia/packages/' + pkgName + '/README.md');

    const packInfo = require('../package.json');
    packInfo.name = pkgName;
    each(['bin', 'scripts', 'devDependencies'], function(val) {
        delete packInfo[val];
    });

    if (pkgName === 'licia' || pkgName === 'licia-es') {
        packInfo.main = 'node.js';
        packInfo.browser = 'browser.js';
        packInfo.typings = 'index.d.ts';
        if (pkgName === 'licia-es') {
            packInfo.sideEffects = false;
        }
        await genIndex(pkgName);
    }
    if (pkgName === 'miniprogram-licia') {
        packInfo.main = 'miniprogram_dist/index.js';
        packInfo.miniprogram = 'miniprogram_dist';
        await genIndex(pkgName);
    }

    await fs.writeFile(
        path.resolve('.licia/packages/' + pkgName + '/package.json'),
        JSON.stringify(packInfo, null, 2),
        'utf8'
    );
}

async function genIndex(pkgName) {
    const mods = {
        browser: [],
        node: [],
        miniprogram: []
    };

    each(modData, (mod, modName) => {
        if (contain(mod.env, 'browser')) {
            mods.browser.push(modName);
        }
        if (contain(mod.env, 'node')) {
            mods.node.push(modName);
        }
        if (contain(mod.env, 'miniprogram')) {
            mods.miniprogram.push(modName);
        }
    });

    if (pkgName === 'licia' || pkgName === 'licia-es') {
        let indexTsData = '';
        for (const type of ['browser', 'node']) {
            const modNames = mods[type];
            let data = '';
            let tsData = '';
            each(modNames, name => {
                if (pkgName === 'licia') {
                    data += `exports.${name} = require('./${name}');\n`;
                    tsData += `export import ${name} = require('./${name}');\n`;
                } else {
                    data += `export { default as ${name} } from './${name}';\n`;
                    tsData += `export { default as ${name} } from './${name}';\n`;
                }
            });
            await fs.writeFile(
                path.resolve(`.licia/packages/${pkgName}/${type}.js`),
                data,
                'utf8'
            );
            await fs.writeFile(
                path.resolve(`.licia/packages/${pkgName}/${type}.d.ts`),
                tsData,
                'utf8'
            );
            indexTsData += `export * from './${type}';\n`;
        }
        await fs.writeFile(
            path.resolve(`.licia/packages/${pkgName}/index.d.ts`),
            indexTsData,
            'utf8'
        );
    } else {
        const modNames = mods.miniprogram;
        let data = '';
        each(modNames, name => {
            data += `exports.${name} = require('./${name}');\n`;
        });
        await fs.writeFile(
            path.resolve(
                `.licia/packages/miniprogram-licia/miniprogram_dist/index.js`
            ),
            data,
            'utf8'
        );
    }
}

async function genFile(file, pkgName) {
    const modName = last(file.split('/')).slice(0, -3);

    let data = await fs.readFile(file, 'utf8');

    const env = modData[modName].env;
    const isEs5 = contain(env, 'browser') || contain(env, 'miniprogram');
    if (isEs5 && pkgName !== 'licia-src' && pkgName !== 'licia-es') {
        data = await transBabel(data);
    }
    if (pkgName === 'miniprogram-licia') {
        if (!contain(env, 'miniprogram')) {
            return;
        }
    }

    data = data.replace(/\/\* module[\s\S]*?\*\//m, '');
    data = data.replace(/LICIA_TEST/g, 'false');

    if (pkgName === 'eustia-module') {
        await fs.writeFile(
            path.resolve('./.licia/packages/' + pkgName, modName + '.js'),
            data,
            'utf-8'
        );
    } else {
        const dependencies = extractDependencies(data);
        if (pkgName === 'licia-es') {
            data = transToEsModule(
                data,
                filter(dependencies, dep => dep !== 'types')
            );
        } else {
            data = transToCommonjs(
                data,
                filter(dependencies, dep => dep !== 'types'),
                isEs5
            );
        }

        if (pkgName === 'licia' || pkgName === 'licia-es') {
            const tsDefinition = extractTsDefinition(
                pkgName,
                data,
                modName,
                dependencies
            );
            if (tsDefinition) {
                await fs.writeFile(
                    path.resolve(
                        './.licia/packages/' + pkgName,
                        modName + '.d.ts'
                    ),
                    tsDefinition,
                    'utf-8'
                );
            }
        }

        if (pkgName !== 'licia-src') {
            data = stripCmt(data);
        }

        let outputPath = path.resolve(
            './.licia/packages/' + pkgName,
            modName + '.js'
        );
        if (pkgName === 'miniprogram-licia') {
            outputPath = path.resolve(
                `./.licia/packages/${pkgName}/miniprogram_dist`,
                modName + '.js'
            );
        }

        await fs.writeFile(outputPath, data, 'utf-8');
    }
}

function transToEsModule(data, dependencies) {
    data = trim(data);
    data += '\n\nexport default exports;\n';

    if (!dependencies) {
        data = 'let exports = {};\n\n' + data;
        return data;
    }

    let imports = '';
    const len = dependencies.length;

    each(dependencies, (val, i) => {
        imports += 'import ' + val + " from './" + val + "';";

        if (i !== len - 1) imports += '\n';
    });

    if (imports) {
        imports = '\n\n' + imports;
        imports += '\n\nlet exports = {};\n\n';
    } else {
        data = 'let exports = {};\n\n' + data;
    }

    data = data.replace(regDependencies, imports);

    return data;
}

function transToCommonjs(data, dependencies, isEs5) {
    data = trim(data);
    data += '\n\nmodule.exports = exports;\n';

    if (!dependencies) return data;

    let requires = '';
    const len = dependencies.length;

    each(dependencies, (val, i) => {
        requires +=
            (isEs5 ? 'var ' : 'const ') + val + " = require('./" + val + "');";

        if (i !== len - 1) requires += '\n';
    });

    if (requires) {
        requires = '\n\n' + requires;
    }

    data = data.replace(regDependencies, requires);

    return data;
}

function transBabel(data) {
    return new Promise((resolve, reject) => {
        babel.transform(
            data,
            {
                plugins: [
                    '@babel/plugin-transform-arrow-functions',
                    '@babel/plugin-transform-template-literals',
                    '@babel/plugin-transform-block-scoping',
                    '@babel/plugin-transform-destructuring',
                    '@babel/plugin-transform-parameters',
                    '@babel/plugin-transform-shorthand-properties'
                ]
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

function extractTsDefinition(pkgName, data, modName, dependencies) {
    let tsDefinition = extractComment(data, 'typescript');
    tsDefinition = tsDefinition.replace(/export declare/g, 'declare');
    if (pkgName === 'licia') {
        tsDefinition += '\n\nexport = ' + modName + ';';
    } else {
        tsDefinition += '\n\nexport default ' + modName + ';';
    }

    let imports = '';

    if (dependencies) {
        const len = dependencies.length;
        each(dependencies, (val, i) => {
            if (!contain(tsDefinition, val)) return;

            if (pkgName === 'licia') {
                imports += 'import ' + val + " = require('./" + val + "');";
            } else {
                imports += 'import ' + val + " from './" + val + "';";
            }

            if (i !== len - 1) imports += '\n';
        });
    }

    if (imports) {
        tsDefinition = imports + '\n\n' + tsDefinition;
    }

    return tsDefinition;
}
