const { lowerCase } = require('licia');
const { runScript } = require('./util');

module.exports = async function() {
    const modName = options.remain[0];

    if (modName) {
        const folder = lowerCase(modName[0]);
        await runScript('eslint', [
            '-c',
            'eslint.src.js',
            `src/${folder}/${modName}.{js,test.js}`,
            '--fix'
        ]);
    } else {
        await runScript('eslint', [
            '-c',
            'eslint.src.js',
            'src/$/*.js',
            'src/[a-z]/*.js',
            '--fix'
        ]);
    }
};
