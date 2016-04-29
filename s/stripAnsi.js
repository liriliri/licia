/* Strip ansi codes from a string.
 *
 * |Name  |Type  |Desc           |
 * |-----------------------------|
 * |str   |string|String to strip|
 * |return|string|Resulted string|
 *
 * ```javascript
 * stripAnsi('\u001b[4mcake\u001b[0m'); // -> 'cake'
 * ```
 */

var regAnsi = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;

function exports(str)
{
    return str.replace(regAnsi, '');
}