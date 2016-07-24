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
        output: './test/doc.js'
    }, cb);
}

function buildDoc()
{
    eustia.doc({
        input: './test/doc.js',
        format: 'md',
        output: './doc.md'
    });
}