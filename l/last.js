/* Gets the last element of array.
 *
 * |Name|Type|Desc|
 * |--------------|
 * |arr|array|The array to query|
 * |return|*|Returns the last element of array|
 */

last = function (arr)
{
    var len = arr ? arr.length : 0;

    if (len) return arr[len - 1];
};