/* Convert the first character of string to upper case.
 *
 * |Name  |Type  |Desc             |
 * |------|------|-----------------|
 * |str   |string|String to convert|
 * |return|string|Converted string |
 */

/* example
 * upperFirst('red'); // -> Red
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function upperFirst(str: string): string;
 */

exports = function(str) {
    if (str.length < 1) return str;

    return str[0].toUpperCase() + str.slice(1);
};
