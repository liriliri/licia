/* Convert the first character to upper case and the remaining to lower case.
 *
 * |Name  |Type  |Desc                    |
 * |------|------|------------------------|
 * |str   |string|The string to capitalize|
 * |return|string|The capitalized string  |
 *
 * ```
 * capitalize('rED'); // -> Red
 * ```
 */

exports = function (str)
{
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
};