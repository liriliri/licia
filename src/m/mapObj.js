/* Map for objects.
 *
 * |Name    |Desc                          |
 * |--------|------------------------------|
 * |object  |Object to iterate over        |
 * |iterator|Function invoked per iteration|
 * |context |Function context              |
 * |return  |New mapped object             |
 */

/* example
 * mapObj({a: 1, b: 2}, function (val, key) { return val + 1 }); // -> {a: 2, b: 3}
 */

/* module
 * env: all
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

    const _keys = keys(obj);
    const len = _keys.length;
    const ret = {};

    for (let i = 0; i < len; i++) {
        const curKey = _keys[i];
        ret[curKey] = iterator(obj[curKey], curKey, obj);
    }

    return ret;
};
