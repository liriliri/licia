/* Check if predicate return truthy for all elements.
 *
 * |Name     |Type         |Desc                                         |
 * |---------------------------------------------------------------------|
 * |obj      |array\|object|Collection to iterate over                   |
 * |predicate|function     |Function invoked per iteration               |
 * |ctx      |*            |Predicate context                            |
 * |return   |boolean      |True if all elements pass the predicate check|
 *
 * ```javascript
 * every([2, 4], function (val)
 * {
 *     return val % 2 === 0;
 * }); // -> false
 * ```
 */

_('safeCb isArrLike keys');

function exports(obj, predicate, ctx)
{
    predicate = safeCb(predicate, ctx);

    var _keys = !isArrLike(obj) && keys(obj),
        len = (_keys || obj).length;

    for (var i = 0; i < len; i++)
    {
        var curKey = _keys ? _keys[i] : i;
        if (!predicate(obj[curKey], curKey, obj)) return false;
    }

    return true;
}