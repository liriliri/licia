/* Check if value is undefined.
 *
 * |Name  |Type   |Desc                      |
 * |------|-------|--------------------------|
 * |val   |*      |Value to check            |
 * |return|boolean|True if value is undefined|
 */

/* example
 * isUndef(void 0); // -> true
 * isUndef(null); // -> false
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isUndef(val: any): boolean
 */

exports = function(val) {
    return val === void 0;
};
