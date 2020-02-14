/* Check if value is an NaN.
 *
 * |Name  |Desc                   |
 * |------|-----------------------|
 * |val   |Value to check         |
 * |return|True if value is an NaN|
 *
 * Undefined is not an NaN, different from global isNaN function.
 */

/* example
 * isNaN(0); // -> false
 * isNaN(NaN); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isNaN(val: any): boolean;
 */

_('isNum');

exports = function(val) {
    return isNum(val) && val !== +val;
};
