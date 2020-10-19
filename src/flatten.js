/* Recursively flatten an array.
 *
 * |Name  |Desc               |
 * |------|-------------------|
 * |arr   |Array to flatten   |
 * |return|New flattened array|
 */

/* example
 * flatten(['a', ['b', ['c']], 'd', ['e']]); // -> ['a', 'b', 'c', 'd', 'e']
 */

/* module
 * env: all
 */

/* typescript
 * export declare function flatten(arr: any[]): any[];
 */

_('isArr');

exports = function(arr) {
    return flat(arr, []);
};

function flat(arr, res) {
    let len = arr.length,
        i = -1,
        cur;

    while (len--) {
        cur = arr[++i];
        isArr(cur) ? flat(cur, res) : res.push(cur);
    }

    return res;
}
