/* Turn a list of values into a single value.
 *
 * |Name               |Type        |Desc                          |
 * |-------------------|------------|------------------------------|
 * |obj                |object array|Collection to iterate over    |
 * |[iteratee=identity]|function    |Function invoked per iteration|
 * |[initial]          |*           |Initial value                 |
 * |[ctx]              |*           |Function context              |
 * |return             |*           |Accumulated value             |
 *
 * ```javascript
 * reduce([1, 2, 3], function (sum, n) { return sum + n }, 0); // -> 6
 * ```
 */

_('optimizeCb isArrLike isUndef keys');

function exports(obj, iteratee, initial, ctx)
{
    iteratee = optimizeCb(iteratee, ctx);

    var i = 0, len, key;

    if (isArrLike(obj))
    {
       if (isUndef(initial))
       {
           initial = obj[0];
           i = 1;
       }
       for (len = obj.length; i < len; i++)
       {
           initial = iteratee(initial, obj[i], i, obj);
       }
    } else
    {
        var _keys = keys(obj);
        if (isUndef(initial))
        {
            initial = obj[_keys[0]];
            i = 1;
        }
        for (len = _keys.length; i < len; i++)
        {
            key = _keys[i];
            initial = iteratee(initial, obj[key], key, obj);
        }
    }

    return initial;
}