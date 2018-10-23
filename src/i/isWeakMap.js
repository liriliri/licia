/* Check if value is a WeakMap object.
 *
 * |Name  |Type   |Desc                      |
 * |------|-------|--------------------------|
 * |val   |*      |Value to check            |
 * |return|boolean|True if value is a WeakMap|
 */

/* example
 * isWeakMap(new Map()); // -> false
 * isWeakMap(new WeakMap()); // -> true
 */

/* module
 * env: all
 * test: all
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object WeakMap]';
};
