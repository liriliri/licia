const { keys, extend, arrToMap } = require('licia');

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
        ecmaVersion: 2018
    },
    extends: 'eslint:recommended',
    rules: {
        semi: ['error', 'always'],
        'no-var': ['error'],
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: false
            }
        ],
        'no-sparse-arrays': 'off',
        'no-redeclare': ['error', { builtinGlobals: false }]
    }
};

var globals = {
    _: true,
    util: true,
    expect: true,
    benchmark: true,
    tests: true,
    options: true,
    LICIA_TEST: true
};

extend(globals, arrToMap(keys(licia)));

exports.globals = globals;

module.exports = exports;
