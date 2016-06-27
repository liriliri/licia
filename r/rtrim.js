/* Remove chars or white-spaces from end of string.
 *
 * |Name  |Type         |Desc                  |
 * |------|-------------|----------------------|
 * |str   |string       |The string to trim    |
 * |chars |string\|array|The characters to trim|
 * |return|string       |The trimmed string    |
 *
 * ```javascript
 * rtrim(' abc  '); // -> ' abc'
 * rtrim('_abc_', '_'); // -> '_abc'
 * rtrim('_abc_', ['c', '_']); // -> '_ab'
 * ```
 */

var regSpace = /\s+$/;

exports = function (str, chars)
{
    if (chars == null) return str.replace(regSpace, '');

    var end = str.length - 1,
        charLen = chars.length,
        found = true,
        i, c;

    while (found && end >= 0)
    {
        found = false;
        i = -1;
        c = str.charAt(end);

        while (++i < charLen)
        {
            if (c === chars[i])
            {
                found = true;
                end--;
                break;
            }
        }
    }

    return (end >= 0) ? str.substring(0, end + 1) : '';
};