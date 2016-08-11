/* Check if value is array-like.
 *
 * |Name  |Type   |Desc                       |
 * |------|-------|---------------------------|
 * |value |*      |Value to check             |
 * |return|boolean|True if value is array like|
 *
 * > Function returns false.
 *
 * ```javascript
 * isArrLike('test'); // -> true
 * isArrLike(document.body.children); // -> true;
 * isArrLike([1, 2, 3]); // -> true
 * ```
 */

_('isNum has isFn');

var MAX_ARR_IDX = Math.pow(2, 53) - 1;

function exports(val)
{
    if (!has(val, 'length')) return false;

    var len = val.length;

    return isNum(len) && len >= 0 && len <= MAX_ARR_IDX && !isFn(val);
}