const prettier = require('prettier');
const { fs, defaults, keys } = require('licia');
const { runScript, extractComment, replaceComment } = require('./util');
const prettierCfg = require('../prettier.config');

const modData = require('../index.json');

module.exports = async function() {
    const modName = options.remain[0];

    if (modName) {
        await runScript('prettier', [
            `src/${modName}.js`,
            `test/${modName}.js`,
            `benchmark/${modName}.js`,
            `demo/${modName}.demo.html`,
            '--write'
        ]);
        await format(modName);
    } else {
        await runScript('prettier', [
            'src/*.js',
            'demo/*.html',
            'test/*.js',
            'benchmark/*.js',
            '--write'
        ]);
        const modNames = keys(modData);
        for (const modName of modNames) {
            await format(modName);
        }
    }
};

async function format(modName) {
    const path = `src/${modName}.js`;
    let data = await fs.readFile(path, 'utf8');
    let typescript = extractComment(data, 'typescript');
    if (typescript) {
        typescript = prettier.format(
            typescript,
            defaults(
                {
                    parser: 'typescript'
                },
                prettierCfg
            )
        );
        data = replaceComment(data, 'typescript', typescript);
    }
    let example = extractComment(data, 'example');
    if (example) {
        example = prettier.format(
            example,
            defaults(
                {
                    parser: 'babel'
                },
                prettierCfg
            )
        );
        data = replaceComment(data, 'example', example);
    }
    await fs.writeFile(path, data, 'utf8');
}
