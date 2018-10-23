/* Check if value is a WeakSet object.
 *
 * |Name  |Type   |Desc                      |
 * |------|-------|--------------------------|
 * |val   |*      |Value to check            |
 * |return|boolean|True if value is a WeakSet|
 */

/* example
 * isWeakSet(new Set()); // -> false
 * isWeakSet(new WeakSet()); // -> true
 */

/* module
 * env: all
 * test: all
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object WeakSet]';
};
