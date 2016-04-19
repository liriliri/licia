/* Convert the first character to upper case.
 *
 * |Name  |Type  |Desc                    |
 * |--------------------------------------|
 * |str   |string|The string to capitalize|
 * |return|string|The capitalized string  |
 *
 * ```
 * capitalize('red'); // -> Red
 * ```
 */

exports = function (str)
{
    return str.charAt(0).toUpperCase() + str.substring(1);
};