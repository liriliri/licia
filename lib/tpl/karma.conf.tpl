module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'chai-jquery', 'jquery-1.8.3'],
        files: [<%=files%>],
        plugins: [
            'karma-mocha',
            'karma-chai-plugins',
            'karma-jquery',
            'karma-chrome-launcher',
            'karma-babel-preprocessor',
            'karma-coverage-istanbul-reporter'
        ],
        reporters: ['progress', 'coverage-istanbul'],
        preprocessors: {
            'testUtil/*.js': ['babel']
        },
        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly', 'text', 'text-summary'],
            dir: '.licia/coverage/karma'
        },
        babelPreprocessor: {
            options: {
                plugins: [
                    'babel-plugin-istanbul'
                ]
            }
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        concurrency: Infinity
    });
};