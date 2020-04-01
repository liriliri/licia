/* Checks if key is a direct property.
 *
 * |Name  |Desc                            |
 * |------|--------------------------------|
 * |obj   |Object to query                 |
 * |key   |Path to check                   |
 * |return|True if key is a direct property|
 */

/* example
 * has({ one: 1 }, 'one'); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function has(obj: {}, key: string): boolean;
 */

const hasOwnProp = Object.prototype.hasOwnProperty;

exports = function(obj, key) {
    return hasOwnProp.call(obj, key);
};
