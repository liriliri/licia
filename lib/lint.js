const { runScript } = require('./util');

module.exports = async function() {
    const modName = options.remain[0];

    if (modName) {
        await runScript('eslint', [
            '-c',
            'eslint.src.js',
            `src/${modName}.js`,
            `test/${modName}.js`,
            '--fix'
        ]);
    } else {
        await runScript('eslint', [
            '-c',
            'eslint.src.js',
            'src/*.js',
            'test/*.js',
            'benchmark/*.js',
            '--fix'
        ]);
    }
};
