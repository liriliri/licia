/* Return the first index where the predicate truth test passes.
 *
 * |Name     |Type    |Desc                          |
 * |---------|--------|------------------------------|
 * |arr      |array   |Array to search               |
 * |predicate|function|Function invoked per iteration|
 * |return   |number  |Index of matched element      |
 */

/* example
 * findIdx([{
 *     name: 'john',
 *     age: 24
 * }, {
 *     name: 'jane',
 *     age: 23
 * }], function (val) {
 *     return val.age === 23;
 * }); // -> 1
 */

/* module
 * env: all
 * test: all
 */

_('safeCb');

function exports(arr, predicate, ctx, dir) {
    dir = dir || 1;

    predicate = safeCb(predicate, ctx);

    var len = arr.length,
        i = dir > 0 ? 0 : len - 1;

    while (i >= 0 && i < len) {
        if (predicate(arr[i], i, arr)) return i;
        i += dir;
    }

    return -1;
}
