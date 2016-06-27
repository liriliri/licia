/* Get size of object, length of array like object or the number of keys.
 *
 * |Name  |Type         |Desc                 |
 * |------|-------------|---------------------|
 * |obj   |array\|object|Collection to inspect|
 * |return|number       |Collection size      |
 *
 * ```javascript
 * size({a: 1, b: 2}); // -> 2
 * size([1, 2, 3]); // -> 3
 * ```
 */

_('isArrLike keys');

function exports(obj)
{
    return isArrLike(obj) ? obj.length : keys(obj).length;
}