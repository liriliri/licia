/* Check if value is undefined.
 *
 * |Name  |Desc                      |
 * |------|--------------------------|
 * |val   |Value to check            |
 * |return|True if value is undefined|
 */

/* example
 * isUndef(void 0); // -> true
 * isUndef(null); // -> false
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isUndef(val: any): val is undefined;
 */

exports = function(val) {
    return val === void 0;
};
