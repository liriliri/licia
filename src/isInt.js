/* Checks if value is classified as a Integer.
 *
 * |Name  |Desc                                 |
 * |------|-------------------------------------|
 * |val   |Value to check                       |
 * |return|True if value is correctly classified|
 */

/* example
 * isInt(5); // -> true
 * isInt(5.1); // -> false
 * isInt({}); // -> false
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isInt(val: any): boolean;
 */

_('isNum');

exports = function(val) {
    return isNum(val) && val % 1 === 0;
};
