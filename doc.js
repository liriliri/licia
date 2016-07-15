var eustia = require('eustia');

var eris = require('./eris.json'),
    util = require('./util');

buildAll(function ()
{
    buildDoc();
});

function buildAll(cb)
{
    eustia.build({
        include: util.keys(eris),
        enableLog: true,
        library: '$_abcdefghijklmnopqrstuvwxyz'.split(''),
        output: './test/module.js'
    }, cb);
}

function buildDoc()
{
    eustia.doc({
        input: './test/module.js',
        format: 'md',
        output: './module.md'
    });
}