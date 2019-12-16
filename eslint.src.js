const { each } = require('licia');

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
    tests: true
};

each(licia, function(val, key) {
    globals[key] = true;
});

exports.globals = globals;

module.exports = exports;
