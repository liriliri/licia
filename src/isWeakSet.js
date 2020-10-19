/* Check if value is a WeakSet object.
 *
 * |Name  |Desc                      |
 * |------|--------------------------|
 * |val   |Value to check            |
 * |return|True if value is a WeakSet|
 */

/* example
 * isWeakSet(new Set()); // -> false
 * isWeakSet(new WeakSet()); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isWeakSet(val: any): boolean;
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object WeakSet]';
};
