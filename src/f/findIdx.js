/* Return the first index where the predicate truth test passes.
 *
 * |Name     |Desc                          |
 * |---------|------------------------------|
 * |arr      |Array to search               |
 * |predicate|Function invoked per iteration|
 * |return   |Index of matched element      |
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
