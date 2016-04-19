/* Recursively flatten an array.
 *
 * |Name  |Type |Desc               |
 * |--------------------------------|
 * |arr   |array|Array to flatten   |
 * |return|array|New flattened array|
 *
 * ```javascript
 * flatten(['a', ['b', ['c']], 'd', ['e']]); // -> ['a', 'b', 'c', 'd', 'e']
 * ```
 */

_('isArr');

function flat(arr, res)
{
    var len = arr.length,
        i = -1,
        cur;

    while (len--)
    {
        cur = arr[++i];
        isArr(cur) ? flat(cur, res) : res.push(cur);
    }

    return res;
}

exports = function (arr)
{
    return flat(arr, []);
};