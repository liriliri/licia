/* Pad string on the left and right sides if it's shorter than length.
 *
 * |Name  |Type  |Desc                      |
 * |------|------|--------------------------|
 * |str   |string|The string to pad         |
 * |len   |number|The padding length        |
 * |chars |string|The string used as padding|
 * |return|string|Resulted string           |
 *
 * ```javascript
 * pad('a', 5); // -> '  a  '
 * pad('a', 5, '-'); // -> '--a--'
 * pad('abc', 3, '-'); // -> 'abc'
 * pad('abc', 5, 'ab'); // -> 'babca'
 * pad('ab', 5, 'ab'); // -> 'ababa'
 * ```
 */

_('repeat');

exports = function (str, len, chars)
{
    var strLen = str.length;

    chars = chars || ' ';

    if (strLen < len)
    {
        var padStr = repeat(chars, Math.ceil((len - strLen) / 2));
        str = padStr + str + padStr;
        str = str.substr(Math.ceil((str.length - len) / 2), len);
    }

    return str;
};