#!/usr/bin/env node

const path = require('path');
const { contain, parseArgs } = require('licia');

const options = parseArgs(process.argv.slice(2), {
    names: {
        browser: 'boolean',
        silent: 'boolean',
        all: 'boolean',
        sauce: 'boolean',
        demo: 'boolean',
        ts: 'boolean',
        release: 'boolean'
    },
    shorthands: {
        browser: 'b',
        silent: 's',
        all: 'a',
        demo: 'd',
        release: 'r'
    }
});

const remain = options.remain;

process.chdir(path.resolve(__dirname, '../'));
global.options = options;

const cmd = remain[0];

const LEGAL_COMMANDS = [
    'test',
    'build',
    'update',
    'benchmark',
    'help',
    'format',
    'lint',
    'spell'
];

(async () => {
    if (!contain(LEGAL_COMMANDS, cmd)) {
        await require('../lib/help')();
    } else {
        remain.splice(0, 1);
        try {
            await require('../lib/' + cmd)();
        } catch (e) {
            console.log(e.message);
        }
    }
})();
