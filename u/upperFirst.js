/* Convert the first character of string to upper case.
 *
 * |Name  |Type  |Desc             |
 * |------|------|-----------------|
 * |str   |string|String to convert|
 * |return|string|Converted string |
 *
 * ```javascript
 * upperFirst('red'); // -> Red
 * ```
 */

/* module
 * env: all
 * test: all
 */

function exports(str) {
    if (str.length < 1) return str;

    return str[0].toUpperCase() + str.slice(1);
}
