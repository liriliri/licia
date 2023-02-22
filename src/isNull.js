/* Check if value is an Null.
 *
 * |Name  |Desc                    |
 * |------|------------------------|
 * |val   |Value to check          |
 * |return|True if value is an Null|
 */

/* example
 * isNull(null); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isNull(val: any): val is null;
 */

exports = function(val) {
    return val === null;
};
