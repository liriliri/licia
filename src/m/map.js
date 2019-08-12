/* Create an array of values by running each element in collection through iteratee.
 *
 * |Name     |Type        |Desc                          |
 * |---------|------------|------------------------------|
 * |object   |array object|Collection to iterate over    |
 * |iterator |function    |Function invoked per iteration|
 * |[context]|*           |Function context              |
 * |return   |array       |New mapped array              |
 */

/* example
 * map([4, 8], function (n) { return n * n; }); // -> [16, 64]
 */

/* module
 * env: all
 * test: all
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

    var _keys = !isArrLike(obj) && keys(obj),
        len = (_keys || obj).length,
        results = Array(len);

    for (var i = 0; i < len; i++) {
        var curKey = _keys ? _keys[i] : i;
        results[i] = iterator(obj[curKey], curKey, obj);
    }

    return results;
};
