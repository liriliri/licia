/* scripts
 * before: npm i --prefix .licia underscore
 */

const underscore = require('underscore');

const arr = [1, 2, 3];

function sum(sum, n) {
    return sum + n;
}

benchmark({
    underscore() {
        underscore.reduce(arr, sum);
    },
    licia() {
        reduce(arr, sum);
    }
});
