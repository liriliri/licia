/* Check if value is a Set object.
 *
 * |Name  |Desc                  |
 * |------|----------------------|
 * |val   |Value to check        |
 * |return|True if value is a Set|
 */

/* example
 * isSet(new Set()); // -> true
 * isSet(new WeakSet()); // -> false
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isSet(val: any): val is Set;
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object Set]';
};
