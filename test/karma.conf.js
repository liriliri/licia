module.exports = function(config)
{
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'chai-jquery', 'jquery-1.8.3'],
        files: [
            'browser.js',
            'browser/*.js'
        ],
        plugins: [
            'karma-mocha',
            'karma-chai-plugins',
            'karma-jquery',
            'karma-chrome-launcher'
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    });
};