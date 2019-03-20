#!/usr/bin/env node

const nopt = require('nopt');
const path = require('path');
const { contain } = require('licia');

const knowOpts = {
        browser: Boolean,
        silent: Boolean,
        all: Boolean,
        sauce: Boolean,
        demo: Boolean,
        ts: Boolean,
        release: Boolean
    },
    shortHands = {
        b: '--browser',
        s: '--silent',
        a: '--all',
        d: '--demo',
        r: '--release'
    },
    options = nopt(knowOpts, shortHands, process.argv, 2),
    remain = options.argv.remain;

process.chdir(path.resolve(__dirname, '../'));
global.options = options;

const cmd = remain[0];

const LEGAL_COMMANDS = ['test', 'pack', 'update', 'benchmark', 'help'];

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
