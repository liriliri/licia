/* Checks if string starts with the given target string.
 *
 * |Name|Type|Desc|
 * |--------------|
 * |string|string|The string to search|
 * |prefix|string|String prefix|
 * |return|boolean|Returns true if string starts with prefix, else false|
 */

exports = function (str, prefix)
{
    return str.indexOf(prefix) === 0;
};