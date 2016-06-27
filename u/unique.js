/* Create duplicate-free version of an array.
 *
 * |Name     |Type    |Desc                         |
 * |---------|--------|-----------------------------|
 * |arr      |array   |Array to inspect             |
 * |[compare]|function|Function for comparing values|
 * |return   |array   |New duplicate free array     |
 *
 * ```javascript
 * unique([1, 2, 3, 1]); // -> [1, 2, 3]
 * ```
 */

_('filter');

function isEqual(a, b) { return a === b }

exports = function (arr, compare)
{
    compare = compare || isEqual;

    return filter(arr, function (item, idx, arr)
    {
        var len = arr.length;

        while (++idx < len)
        {
            if (compare(item, arr[idx])) return false;
        }

        return true;
    });
};