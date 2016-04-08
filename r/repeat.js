/* Repeat string n-times.
 *
 * |Name|Type|Desc|
 * |--------------|
 * |string|string|The string to repeat|
 * |n|number|Repeat times|
 * |return|string|Repeated string|
 */

repeat = function (str, n)
{
    var ret = '';

    if (n < 1) return '';

    while (n > 0)
    {
        if (n & 1) ret += str;
        n >>= 1;
        str += str;
    }

    return ret;
};