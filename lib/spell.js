const { runScript } = require('./util');

module.exports = async function() {
    const modName = options.remain[0];

    if (modName) {
        await runScript('cspell', [`src/${modName}.js`]);
    } else {
        await runScript('cspell', ['src/*.js', 'test/*.js', 'benchmark/*.js']);
    }
};
