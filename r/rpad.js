/* Pads string on the right side if it's shorter than length.
 *
 * |Name  |Type  |Desc                  |
 * |------------------------------------|
 * |str   |string|The string to pad     |
 * |len   |number|Padding length        |
 * |chars |string|String used as padding|
 * |return|string|Resulted string       |
 */

_('repeat');

exports = function (str, len, chars)
{
    var strLen = str.length;

    return strLen < len ? str + repeat(chars, len - strLen): str;
};