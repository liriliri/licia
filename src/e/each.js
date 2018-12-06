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
 * declare namespace each {
 *     interface Collection<T> {}
 *     interface List<T> extends Collection<T> {
 *         [index: number]: T;
 *         length: number;
 *     }
 *     interface ListIterator<T, TResult> {
 *         (value: T, index: number, list: List<T>): TResult;
 *     }
 *     interface Dictionary<T> extends Collection<T> {
 *         [index: string]: T;
 *     }
 *     interface ObjectIterator<T, TResult> {
 *         (element: T, key: string, list: Dictionary<T>): TResult;
 *     }
 * }
 *
 * export declare function each<T>(
 *     list: each.List<T>, 
 *     iterator: each.ListIterator<T, void>,
 *     ctx?: any
 * ): each.List<T>;
 * 
 * export declare function each<T>(
 *     object: each.Dictionary<T>,
 *     iterator: each.ObjectIterator<T, void>,
 *     ctx?: any
 * ): each.Collection<T>;
 */

_('isArrLike keys optimizeCb');

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
