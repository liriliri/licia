/* Iterate over elements of collection and invokes iterator for each element.
 *
 * |Name    |Type        |Desc                          |
 * |--------|------------|------------------------------|
 * |obj     |object array|Collection to iterate over    |
 * |iterator|function    |Function invoked per iteration|
 * |[ctx]   |*           |Function context              |
 */

/* example
 * each({'a': 1, 'b': 2}, function (val, key) {});
 */

/* module
 * env: all
 * test: all
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

_('isArrLike keys optimizeCb types');

exports = function(obj, iterator, ctx) {
    iterator = optimizeCb(iterator, ctx);

    var i, len;

    if (isArrLike(obj)) {
        for (i = 0, len = obj.length; i < len; i++) iterator(obj[i], i, obj);
    } else {
        var _keys = keys(obj);
        for (i = 0, len = _keys.length; i < len; i++) {
            iterator(obj[_keys[i]], _keys[i], obj);
        }
    }

    return obj;
};
