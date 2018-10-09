module.exports = {
    files: ['lib/**/*.js', 'bin/*.js', '*.js', 'script/*.js'],
    library: '$_abcdefghijklmnopqrstuvwxyz'.split(''),
    output: 'lib/util.js',
    exclude: 'js',
    format: 'commonjs'
};
