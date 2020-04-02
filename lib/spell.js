const { lowerCase } = require('licia');
const { runScript } = require('./util');

module.exports = async function() {
    const modName = options.remain[0];

    if (modName) {
        const folder = lowerCase(modName[0]);
        await runScript('cspell', [`src/${folder}/${modName}.js`]);
    } else {
        await runScript('cspell', ['src/$/*.js', 'src/[a-z]/*.js']);
    }
};
