module.exports = {
    files: ['lib/**/*.js', 'bin/*.js', '*.js', 'script/*.js'],
    library: '$_abcdefghijklmnopqrstuvwxyz'.split('').map(val => 'src/' + val),
    output: 'lib/util.js',
    exclude: 'js',
    removeComments: true,
    format: 'commonjs'
};
