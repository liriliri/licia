// Used to check that no es6 feature is used.
const path = require('path');
const uglifyJs = require('uglify-js');
const { keys, contain, fs } = require('licia');

const modData = require('../index.json');
const { mkdir } = require('./util');

(async function() {
    await mkdir(path.resolve(`.licia/packages/licia-uglify`));
    const _keys = keys(modData);

    for (let i = 0, len = _keys.length; i < len; i++) {
        const key = _keys[i];
        const data = modData[key];
        if (!contain(data.env, 'browser') && !contain(data.env, 'miniprogram'))
            continue;
        const srcPath = path.resolve(`.licia/packages/licia/${key}.js`);
        const output = uglifyJs.minify(await fs.readFile(srcPath, 'utf8'));
        if (output.error) {
            console.log(`Something wrong with ${key}: ${output.error}`);
            process.exit(1);
        }
        const outputPath = path.resolve(
            `.licia/packages/licia-uglify/${key}.js`
        );
        await fs.writeFile(outputPath, output.code, 'utf8');
    }
})();
