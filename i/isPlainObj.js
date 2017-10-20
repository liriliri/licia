/* Check if value is an object created by Object constructor.
 *
 * |Name  |Type   |Desc                           |
 * |------|-------|-------------------------------|
 * |val   |*      |Value to check                 |
 * |return|boolean|True if value is a plain object|
 *
 * ```javascript
 * isPlainObj({}); // -> true
 * isPlainObj([]); // -> false
 * isPlainObj(function () {}); // -> false
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('isObj isArr isFn has');

function exports(val)
{
    if (!isObj(val)) return false;

    var ctor = val.constructor;
    if (!isFn(ctor)) return false;
    if (!has(ctor.prototype, 'isPrototypeOf')) return false;

    return !isArr(val) && !isFn(val);
}