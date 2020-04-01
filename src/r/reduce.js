/* Turn a list of values into a single value.
 *
 * |Name             |Desc                          |
 * |-----------------|------------------------------|
 * |obj              |Collection to iterate over    |
 * |iterator=identity|Function invoked per iteration|
 * |initial          |Initial value                 |
 * |ctx              |Function context              |
 * |return           |Accumulated value             |
 */

/* example
 * reduce(
 *     [1, 2, 3],
 *     function(sum, n) {
 *         return sum + n;
 *     },
 *     0
 * ); // -> 6
 */

/* module
 * env: all
 */

/* typescript
 * export declare function reduce<T, TResult>(
 *     list: types.List<T>,
 *     iterator: types.MemoIterator<T, TResult>,
 *     memo?: TResult,
 *     context?: any
 * ): TResult;
 * export declare function reduce<T, TResult>(
 *     list: types.Dictionary<T>,
 *     iterator: types.MemoObjectIterator<T, TResult>,
 *     memo?: TResult,
 *     context?: any
 * ): TResult;
 */

_('optimizeCb isArrLike isUndef keys types');

exports = createReduce(1);
exports.create = createReduce;

function createReduce(dir) {
    return function(obj, iterator, initial, ctx) {
        iterator = optimizeCb(iterator, ctx);

        let i, len, key;

        if (isArrLike(obj)) {
            len = obj.length;
            i = dir > 0 ? 0 : len - 1;
            if (isUndef(initial)) {
                initial = obj[i];
                i += dir;
            }
            for (; i < len && i >= 0; i += dir) {
                initial = iterator(initial, obj[i], i, obj);
            }
        } else {
            const _keys = keys(obj);
            len = _keys.length;
            i = dir > 0 ? 0 : len - 1;
            if (isUndef(initial)) {
                initial = obj[_keys[i]];
                i += dir;
            }
            for (; i < len && i >= 0; i += dir) {
                key = _keys[i];
                initial = iterator(initial, obj[key], key, obj);
            }
        }

        return initial;
    };
}
