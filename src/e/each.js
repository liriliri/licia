/* Iterate over elements of collection and invokes iterator for each element.
 *
 * |Name    |Desc                          |
 * |--------|------------------------------|
 * |obj     |Collection to iterate over    |
 * |iterator|Function invoked per iteration|
 * |ctx     |Function context              |
 */

/* example
 * each({'a': 1, 'b': 2}, function (val, key) {});
 */

/* module
 * env: all
 */

/* typescript
 * export declare function each<T>(
 *     list: types.List<T>,
 *     iterator: types.ListIterator<T, void>,
 *     ctx?: any
 * ): types.List<T>;
 * export declare function each<T>(
 *     object: types.Dictionary<T>,
 *     iterator: types.ObjectIterator<T, void>,
 *     ctx?: any
 * ): types.Collection<T>;
 */

/* eslint-disable no-unused-vars */
_('isArrLike keys optimizeCb types');

exports = function(obj, iterator, ctx) {
    iterator = optimizeCb(iterator, ctx);

    let i, len;

    if (isArrLike(obj)) {
        for (i = 0, len = obj.length; i < len; i++) iterator(obj[i], i, obj);
    } else {
        const _keys = keys(obj);
        for (i = 0, len = _keys.length; i < len; i++) {
            iterator(obj[_keys[i]], _keys[i], obj);
        }
    }

    return obj;
};
