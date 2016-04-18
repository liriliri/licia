/* Pad string on the right side if it's shorter than length.
 *
 * |Name  |Type  |Desc                  |
 * |------------------------------------|
 * |str   |string|The string to pad     |
 * |len   |number|Padding length        |
 * |chars |string|String used as padding|
 * |return|string|Resulted string       |
 *
 * ```javascript
 * rpad('a', 5); // -> 'a    '
 * rpad('a', 5, '-'); // -> 'a----'
 * rpad('abc', 3, '-'); // -> 'abc'
 * rpad('abc', 5, 'ab'); // -> 'abcab'
 * ```
 */

_('repeat');

exports = function (str, len, chars)
{
    var strLen = str.length;

    chars = chars || ' ';

    if (strLen < len) str = (str + repeat(chars, len - strLen)).slice(0, len);

    return str;
};