/* Strip ansi color codes from a string.
 *
 * |Name  |Type  |Desc           |
 * |------|------|---------------|
 * |str   |string|String to strip|
 * |return|string|Resulted string|
 */

/* example
 * stripColor('\u001b[31mred\u001b[39m'); // -> 'red'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function stripColor(str: string): string
 */

/* eslint-disable no-control-regex */
var regColor = /\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]/g;

exports = function(str) {
    return str.replace(regColor, '');
};
