/* Check if value is null or undefined, the same as value == null.
 *
 * |Name  |Desc                              |
 * |------|----------------------------------|
 * |val   |Value to check                    |
 * |return|True if value is null or undefined|
 */

/* example
 * isNil(null); // -> true
 * isNil(void 0); // -> true
 * isNil(undefined); // -> true
 * isNil(false); // -> false
 * isNil(0); // -> false
 * isNil([]); // -> false
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isNil(val: any): boolean;
 */

exports = function(val) {
    return val == null;
};
