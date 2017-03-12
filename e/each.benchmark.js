var underscore = require('underscore');

var obj = {a: 1, b: 2},
    arr = [1, 2, 3];

function noop() {}

suite.add('underscore', function ()
{
    underscore.each(obj, noop);
    underscore.each(arr, noop);
}).add('eris', function ()
{
    each(obj, noop);
    each(arr, noop);
}).run();