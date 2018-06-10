/* Check if value is a WeakMap object.
 *
 * |Name  |Type   |Desc                      |
 * |------|-------|--------------------------|
 * |val   |*      |Value to check            |
 * |return|boolean|True if value is a WeakMap|
 * 
 * ```javascript
 * isWeakMap(new Map()); // -> false
 * isWeakMap(new WeakMap()); // -> true
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('objToStr');

function exports(val) {
    return objToStr(val) === '[object WeakMap]';
}
