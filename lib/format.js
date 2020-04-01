const { lowerCase } = require('licia');
const { runScript } = require('./util');

module.exports = async function() {
    const modName = options.remain[0];

    if (modName) {
        await runScript('prettier', [
            `src/${lowerCase(modName[0])}/${modName}.{js,demo.html,test.js}`,
            '--write'
        ]);
    } else {
        await runScript('prettier', [
            'src/$/*.js',
            'src/[a-z]/*.{js,html}',
            '--write'
        ]);
    }
};
