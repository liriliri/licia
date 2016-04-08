/* Checks if string ends with the given target string.
 *
 * |Name|Type|Desc|
 * |--------------|
 * |string|string|The string to search|
 * |suffix|string|String suffix|
 * |return|boolean|Returns true if string ends with target, else false|
 */

endWith = function (str, suffix)
{
    var idx = str.length - suffix.length;

    return idx >= 0 && str.indexOf(suffix, idx) === idx;
};