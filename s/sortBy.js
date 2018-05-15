/* Return an array of elements sorted in ascending order by results of running each element through iteratee.
 *
 * |Name               |Type        |Desc                      |
 * |-------------------|------------|--------------------------|
 * |arr                |object array|Collection to iterate over|
 * |[iteratee=identity]|function    |Iteratee to sort by       |
 * |[ctx]              |*           |Iteratee context          |
 * |return             |array       |New sorted array          |
 * 
 * ```javascript
 * sortBy([1, 2, 3, 4, 5, 6], function (num) 
 * { 
 *     return Math.sin(num); 
 * }); // -> [5, 4, 6, 3, 1, 2]
 * ```
 */

/* module
 * env: all
 * test: all
 */ 

_('safeCb pluck map isUndef'); 

function exports(obj, iteratee, ctx) 
{
    iteratee = safeCb(iteratee, ctx);

    var idx = 0;

    return pluck(map(obj, function (val, key) 
    {
        return {
            val: val,
            idx: idx++,
            criteria: iteratee(val, key, obj)
        };
    }).sort(function (left, right) 
    {
        var a = left.criteria,
            b = right.criteria;

        if (a !== b) {
            if (a > b || isUndef(a)) return 1;
            if (a < b || isUndef(b)) return -1;
        }

        return left.idx - right.idx;
    }), 'val');
} 