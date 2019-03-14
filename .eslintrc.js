const each = require('licia/each');

const licia = require('./index.json');

var exports = {
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es6: true,
        mocha: true,
        jquery: true
    },
    parserOptions: {
        ecmaVersion: 2017
    },
    extends: 'eslint:recommended',
    rules: {
        semi: ['error', 'always'],
        'no-unused-vars': ['off']
    }
};

var globals = {
    _: true,
    util: true,
    expect: true
};

each(licia, function(val, key) {
    globals[key] = true;
});

exports.globals = globals;

module.exports = exports;
