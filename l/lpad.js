/* Pad string on the left side if it's shorter than length.
 *
 * |Name  |Type  |Desc                      |
 * |------|------|--------------------------|
 * |str   |string|The string to pad         |
 * |len   |number|The padding length        |
 * |chars |string|The string used as padding|
 * |return|string|Resulted string           |
 *
 * ```javascript
 * lpad('a', 5); // -> '    a'
 * lpad('a', 5, '-'); // -> '----a'
 * lpad('abc', 3, '-'); // -> 'abc'
 * lpad('abc', 5, 'ab'); // -> 'ababc'
 * ```
 */

_('repeat');

exports = function (str, len, chars)
{
    var strLen = str.length;

    chars = chars || ' ';

    if (strLen < len) str = (repeat(chars, len - strLen) + str).slice(-len);

    return str;
};