/* Remove chars or white-spaces from beginning end of string.
 *
 * |Name  |Type         |Desc                  |
 * |-------------------------------------------|
 * |str   |string       |The string to trim    |
 * |chars |string\|array|The characters to trim|
 * |return|string       |The trimmed string    |
 *
 * ```javascript
 * trim(' abc  '); // -> 'abc'
 * trim('_abc_', '_'); // -> 'abc'
 * trim('_abc_', ['a', 'c', '_']); // -> 'b'
 * ```
 */

_('ltrim rtrim');

var regSpace = /^\s+|\s+$/g;

exports = function (str, chars)
{
    if (chars == null) return str.replace(regSpace, '');

    return ltrim(rtrim(str, chars), chars);
};