/* scripts
 * before: npm i underscore --no-save
 */

const underscore = require('underscore');

const arr = [1, 2, 3];

function sum(sum, n) {
    return sum + n;
}

suite
    .add('underscore', function() {
        underscore.reduce(arr, sum);
    })
    .add('licia', function() {
        reduce(arr, sum);
    })
    .run();
