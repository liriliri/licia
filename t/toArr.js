/* Convert value to an array.
 *
 * |Name  |Type |Desc            |
 * |-----------------------------|
 * |val   |*    |Value to convert|
 * |return|array|Converted array |
 *
 * ```javascript
 * toArr({a: 1, b: 2}); // -> [1, 2]
 * toArr('abc'); // -> ['a', 'b', 'c']
 * toArr(1); // -> []
 * toArr(null); // -> []
 * ```
 */

_('isArrLike isStr map isArr identity');

exports = function (val)
{
    if (!val) return [];

    if (isArr(val)) return val;

    if (isArrLike(val) || isObj(val)) return map(val);

    return [val];
};