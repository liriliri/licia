var eustia = require('eustia');

var eris = require('../eris.json'),
    util = require('../lib/util');

module.exports = function ()
{
    eustia.build({
        include: util.keys(eris),
        enableLog: true,
        library: '$_abcdefghijklmnopqrstuvwxyz'.split(''),
        output: './testUtil/doc.js'
    }, function ()
    {
        eustia.doc({
            input: './testUtil/doc.js',
            format: 'md',
            output: './doc.md'
        });
    });
};
