/* Check if value is an Null.
 *
 * |Name  |Type   |Desc                    |
 * |------|-------|------------------------|
 * |val   |*      |Value to check          |
 * |return|boolean|True if value is an Null|
 */

/* example
 * isNull(null); // -> true
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isNull(val: any): boolean;
 */

exports = function(val) {
    return val === null;
};
