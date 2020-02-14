/* Return the first argument given.
 *
 * |Name  |Desc       |
 * |------|-----------|
 * |val   |Any value  |
 * |return|Given value|
 */

/* example
 * identity('a'); // -> 'a'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function identity<T>(val: T): T;
 */

exports = function(val) {
    return val;
};
