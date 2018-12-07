/* Check if value is a Set object.
 *
 * |Name  |Type   |Desc                  |
 * |------|-------|----------------------|
 * |val   |*      |Value to check        |
 * |return|boolean|True if value is a Set|
 */

/* example
 * isSet(new Set()); // -> true
 * isSet(new WeakSet()); // -> false
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isSet(val: any): boolean;
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object Set]';
};
