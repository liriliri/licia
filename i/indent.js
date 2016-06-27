/* Indent each line in a string.
 *
 * |Name  |Type  |Desc                |
 * |------|------|--------------------|
 * |str   |string|String to indent    |
 * |[char]|string|Character to prepend|
 * |[len] |number|Indent length       |
 * |return|string|Indented string     |
 *
 * ```javascript
 * indent('foo\nbar', ' ', 4); // -> 'foo\n    bar'
 * ```
 */

_('isNum isUndef repeat');

var regLineBegin = /^(?!\s*$)/mg;

function exports(str, char, len)
{
    if (isNum(char))
    {
        len = char;
        char = ' ';
    }
    if (isUndef(len)) len = 4;
    if (isUndef(char)) char = ' ';

    char = repeat(char, len);

    return str.replace(regLineBegin, char);
}

