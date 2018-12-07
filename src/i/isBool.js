/* Check if value is a boolean primitive.
 *
 * |Name  |Type   |Desc                      |
 * |------|-------|--------------------------|
 * |val   |*      |Value to check            |
 * |return|boolean|True if value is a boolean|
 */

/* example
 * isBool(true); // -> true
 * isBool(false); // -> true
 * isBool(1); // -> false
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isBool(val: any): boolean;
 */

exports = function(val) {
    return val === true || val === false;
};
