#!/usr/bin/env node

const nopt = require('nopt');
const path = require('path');
const contain = require('licia/contain');

var knowOpts = {
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

var cmd = remain[0];

var LEGAL_COMMANDS = ['test', 'pack', 'update', 'benchmark', 'help'];

if (!contain(LEGAL_COMMANDS, cmd)) {
    require('../lib/help')();
} else {
    remain.splice(0, 1);
    require('../lib/' + cmd)();
}
