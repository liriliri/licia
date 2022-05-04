// Used to check that no es6 feature is used.
const { keys, concat, contain } = require('licia');

const modData = require('../index.json');
const { runScript } = require('./util');

(async function() {
    const _keys = keys(modData);
    const modules = [];

    for (let i = 0, len = _keys.length; i < len; i++) {
        const key = _keys[i];
        const data = modData[key];
        if (
            !contain(data.env, 'browser') &&
            !contain(data.env, 'miniprogram')
        ) {
            continue;
        }
        modules.push(`.licia/packages/licia/${key}.js`);
    }
    await runScript('es-check', concat('es5', modules));
})();
