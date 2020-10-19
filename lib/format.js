const prettier = require('prettier');
const { lowerCase, fs, defaults, keys } = require('licia');
const { runScript, extractComment, replaceComment } = require('./util');
const prettierCfg = require('../prettier.config');

const modData = require('../index.json');

module.exports = async function() {
    const modName = options.remain[0];

    if (modName) {
        const folder = lowerCase(modName[0]);
        await runScript('prettier', [
            `src/${folder}/${modName}.{js,demo.html,server.js}`,
            `test/${modName}.js`,
            '--write'
        ]);
        await format(modName);
    } else {
        await runScript('prettier', [
            'src/$/*.js',
            'src/[a-z]/*.{js,html}',
            '--write'
        ]);
        const modNames = keys(modData);
        for (const modName of modNames) {
            await format(modName);
        }
    }
};

async function format(modName) {
    const folder = lowerCase(modName[0]);
    const path = `src/${folder}/${modName}.js`;
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
