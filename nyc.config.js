module.exports = {
    'temp-dir': './.licia/.nyc_output',
    exclude: ['.licia/test/*.js'],
    reporter: ['text', 'html'],
    'report-dir': './.licia/coverage/nyc'
};
