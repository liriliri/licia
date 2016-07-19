/* Strip ansi color codes from a string.
 *
 * |Name  |Type  |Desc           |
 * |------|------|---------------|
 * |str   |string|String to strip|
 * |return|string|Resulted string|
 *
 * ```javascript
 * stripColor('\u001b[31mred\u001b[39m'); // -> 'red'
 * ```
 */

var regColor = /\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]/g;

function exports(str)
{
    return str.replace(regColor, '');
}