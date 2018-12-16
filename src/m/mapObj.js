/* Map for objects.
 *
 * |Name     |Type    |Desc                          |
 * |---------|--------|------------------------------|
 * |object   |object  |Object to iterate over        |
 * |iterator |function|Function invoked per iteration|
 * |[context]|*       |Function context              |
 * |return   |object  |New mapped object             |
 */

/* example
 * mapObj({a: 1, b: 2}, function (val, key) { return val + 1 }); // -> {a: 2, b: 3}
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function mapObj<T, TResult>(
 *     object: types.Dictionary<T>,
 *     iterator: types.ObjectIterator<T, TResult>,
 *     context?: any
 * ): types.Dictionary<TResult>;
 */

_('safeCb keys types');

exports = function(obj, iterator, ctx) {
    iterator = safeCb(iterator, ctx);

    var _keys = keys(obj),
        len = _keys.length,
        ret = {};

    for (var i = 0; i < len; i++) {
        var curKey = _keys[i];
        ret[curKey] = iterator(obj[curKey], curKey, obj);
    }

    return ret;
};
