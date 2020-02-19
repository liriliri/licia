/* Convert the first character to upper case and the remaining to lower case.
 *
 * |Name  |Desc                |
 * |------|--------------------|
 * |str   |String to capitalize|
 * |return|Capitalized string  |
 */

/* example
 * capitalize('rED'); // -> Red
 */

/* module
 * env: all
 */

/* typescript
 * export declare function capitalize(str: string): string;
 */

exports = function(str) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
};
