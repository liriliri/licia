/* scripts
 * before: npm i underscore --no-save
 */

const underscore = require('underscore');

const obj = { a: 1, b: 2 };
const arr = [1, 2, 3];

function noop() {}

suite
    .add('underscore', function() {
        underscore.each(obj, noop);
        underscore.each(arr, noop);
    })
    .add('licia', function() {
        each(obj, noop);
        each(arr, noop);
    })
    .run();
