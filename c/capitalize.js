/* Convert the first character to upper case and the remaining to lower case.
 *
 * |Name  |Type  |Desc                |
 * |------|------|--------------------|
 * |str   |string|String to capitalize|
 * |return|string|Capitalized string  |
 *
 * ```
 * capitalize('rED'); // -> Red
 * ```
 */

function exports(str)
{
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}