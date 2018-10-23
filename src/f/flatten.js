/* Recursively flatten an array.
 *
 * |Name  |Type |Desc               |
 * |------|-----|-------------------|
 * |arr   |array|Array to flatten   |
 * |return|array|New flattened array|
 */

/* example
 * flatten(['a', ['b', ['c']], 'd', ['e']]); // -> ['a', 'b', 'c', 'd', 'e']
 */

/* module
 * env: all
 * test: all
 */

_('isArr');

exports = function(arr) {
    return flat(arr, []);
};

function flat(arr, res) {
    var len = arr.length,
        i = -1,
        cur;

    while (len--) {
        cur = arr[++i];
        isArr(cur) ? flat(cur, res) : res.push(cur);
    }

    return res;
}
