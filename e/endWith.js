/* Checks if string ends with the given target string.
 *
 * |Name  |Type   |Desc                                       |
 * |----------------------------------------------------------|
 * |str   |string |The string to search                       |
 * |suffix|string |String suffix                              |
 * |return|boolean|True if string ends with target, else false|
 */

endWith = function (str, suffix)
{
    var idx = str.length - suffix.length;

    return idx >= 0 && str.indexOf(suffix, idx) === idx;
};