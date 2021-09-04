/* scripts
 * before: npm i --prefix .licia underscore
 */

const underscore = require('underscore');

const obj = { a: 1, b: 2 };
const arr = [1, 2, 3];

function noop() {}

benchmark({
    underscore() {
        underscore.each(obj, noop);
        underscore.each(arr, noop);
    },
    licia() {
        each(obj, noop);
        each(arr, noop);
    }
});
