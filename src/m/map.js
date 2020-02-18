/* Create an array of values by running each element in collection through iteratee.
 *
 * |Name    |Desc                          |
 * |--------|------------------------------|
 * |object  |Collection to iterate over    |
 * |iterator|Function invoked per iteration|
 * |context |Function context              |
 * |return  |New mapped array              |
 */

/* example
 * map([4, 8], function (n) { return n * n; }); // -> [16, 64]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function map<T, TResult>(
 *     list: types.List<T>,
 *     iterator: types.ListIterator<T, TResult>,
 *     context?: any
 * ): TResult[];
 * export declare function map<T, TResult>(
 *     object: types.Dictionary<T>,
 *     iterator: types.ObjectIterator<T, TResult>,
 *     context?: any
 * ): TResult[];
 */

/* eslint-disable no-unused-vars */
_('safeCb keys isArrLike types');

exports = function(obj, iterator, ctx) {
    iterator = safeCb(iterator, ctx);

    const _keys = !isArrLike(obj) && keys(obj);
    const len = (_keys || obj).length;
    const results = Array(len);

    for (let i = 0; i < len; i++) {
        const curKey = _keys ? _keys[i] : i;
        results[i] = iterator(obj[curKey], curKey, obj);
    }

    return results;
};
