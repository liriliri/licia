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

_('isObj isArr isFn');

function exports(val)
{
    return isObj(val) && !isArr(val) && !isFn(val);
}