var licia = require('./index.json'),
    util = require('./lib/util');

var exports = {
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es6: true,
        mocha: true,
        jquery: true
    },
    extends: 'eslint:recommended',
    rules: {
        quotes: [
            'error',
            'single'
        ],
        'no-unused-vars': [
            'off'
        ]
    }
};

var globals = {
    _: true,
    util: true,
    expect: true
};

util.each(licia, function (val, key) { globals[key] = true });

exports.globals = globals;

module.exports = exports;