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

/* typescript
 * export declare function findIdx(arr: any[], predicate: Function): number;
 */

_('safeCb');

exports = function(arr, predicate, ctx, dir) {
    dir = dir || 1;

    predicate = safeCb(predicate, ctx);

    const len = arr.length;
    let i = dir > 0 ? 0 : len - 1;

    while (i >= 0 && i < len) {
        if (predicate(arr[i], i, arr)) return i;
        i += dir;
    }

    return -1;
};
