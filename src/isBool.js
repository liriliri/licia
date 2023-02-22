/* Check if value is a boolean primitive.
 *
 * |Name  |Desc                      |
 * |------|--------------------------|
 * |val   |Value to check            |
 * |return|True if value is a boolean|
 */

/* example
 * isBool(true); // -> true
 * isBool(false); // -> true
 * isBool(1); // -> false
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isBool(val: any): val is boolean;
 */

exports = function(val) {
    return val === true || val === false;
};
