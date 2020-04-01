/* Return an array of elements sorted in ascending order by results of running each element through iteratee.
 *
 * |Name             |Desc                      |
 * |-----------------|--------------------------|
 * |arr              |Collection to iterate over|
 * |iterator=identity|Iterator to sort by       |
 * |ctx              |Iterator context          |
 * |return           |New sorted array          |
 */

/* example
 * sortBy([1, 2, 3, 4, 5, 6], function(num) {
 *     return Math.sin(num);
 * }); // -> [5, 4, 6, 3, 1, 2]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function sortBy(
 *     arr: any,
 *     iterator?: types.AnyFn,
 *     ctx?: any
 * ): any[];
 */

_('safeCb pluck map isUndef types');

exports = function(obj, iteratee, ctx) {
    iteratee = safeCb(iteratee, ctx);

    let idx = 0;

    return pluck(
        map(obj, function(val, key) {
            return {
                val: val,
                idx: idx++,
                criteria: iteratee(val, key, obj)
            };
        }).sort(function(left, right) {
            const a = left.criteria;
            const b = right.criteria;

            if (a !== b) {
                if (a > b || isUndef(a)) return 1;
                if (a < b || isUndef(b)) return -1;
            }

            return left.idx - right.idx;
        }),
        'val'
    );
};
