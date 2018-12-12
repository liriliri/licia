/* Check if predicate return truthy for all elements.
 *
 * |Name      |Type        |Desc                                         |
 * |----------|------------|---------------------------------------------|
 * |object    |array object|Collection to iterate over                   |
 * |[iterator]|function    |Function invoked per iteration               |
 * |[context] |*           |Predicate context                            |
 * |return    |boolean     |True if all elements pass the predicate check|
 */

/* example
 * every([2, 4], function (val) {
 *     return val % 2 === 0;
 * }); // -> false
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function every<T>(
 *     object: types.List<T>,
 *     iterator?: types.ListIterator<T, boolean>,
 *     context?: any
 * ): boolean;
 * export declare function every<T>(
 *     object: types.Dictionary<T>,
 *     iterator?: types.ObjectIterator<T, boolean>,
 *     context?: any
 * ): boolean;
 */

_('safeCb isArrLike keys types');

exports = function(obj, predicate, ctx) {
    predicate = safeCb(predicate, ctx);

    var _keys = !isArrLike(obj) && keys(obj),
        len = (_keys || obj).length;

    for (var i = 0; i < len; i++) {
        var curKey = _keys ? _keys[i] : i;
        if (!predicate(obj[curKey], curKey, obj)) return false;
    }

    return true;
};
