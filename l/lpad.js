/* Pads string on the left side if it's shorter than length.
 *
 * |Name |Type  |Desc                      |
 * |---------------------------------------|
 * |str  |string|The string to pad         |
 * |len  |number|The padding length        |
 * |chars|string|The string used as padding|
 */

_('repeat');

exports = function (str, len, chars)
{
    var strLen = str.length;

    return strLen < len ? repeat(chars, len - strLen) + str : str;
};