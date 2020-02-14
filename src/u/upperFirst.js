/* Convert the first character of string to upper case.
 *
 * |Name  |Desc             |
 * |------|-----------------|
 * |str   |String to convert|
 * |return|Converted string |
 */

/* example
 * upperFirst('red'); // -> Red
 */

/* module
 * env: all
 */

/* typescript
 * export declare function upperFirst(str: string): string;
 */

exports = function(str) {
    if (str.length < 1) return str;

    return str[0].toUpperCase() + str.slice(1);
};
