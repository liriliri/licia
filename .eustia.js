module.exports = {
    files: ['lib/**/*.js', 'bin/*.js', '*.js', 'script/*.js'],
    library: './node_modules/eustia-module',
    output: 'lib/util.js',
    exclude: 'js',
    removeComments: true,
    format: 'commonjs'
};
