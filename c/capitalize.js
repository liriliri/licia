/* Convert the first character to upper case and the remaining to lower case.
 *
 * |Name  |Type  |Desc                |
 * |------|------|--------------------|
 * |str   |string|String to capitalize|
 * |return|string|Capitalized string  |
 *
 * ```javascript
 * capitalize('rED'); // -> Red
 * ```
 */

/* module
 * env: all
 * test: all
 */

function exports(str)
{
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}