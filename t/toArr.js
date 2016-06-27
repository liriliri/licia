/* Convert value to an array.
 *
 * |Name  |Type |Desc            |
 * |------|-----|----------------|
 * |val   |*    |Value to convert|
 * |return|array|Converted array |
 *
 * ```javascript
 * toArr({a: 1, b: 2}); // -> [{a: 1, b: 2}]
 * toArr('abc'); // -> ['abc']
 * toArr(1); // -> []
 * toArr(null); // -> []
 * ```
 */

_('isArrLike map isArr isStr');

exports = function (val)
{
    if (!val) return [];

    if (isArr(val)) return val;

    if (isArrLike(val) && !isStr(val)) return map(val);

    return [val];
};