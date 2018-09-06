/* Iterate over elements of collection and invokes iteratee for each element.
 *
 * |Name    |Type        |Desc                          |
 * |--------|------------|------------------------------|
 * |obj     |object array|Collection to iterate over    |
 * |iteratee|function    |Function invoked per iteration|
 * |[ctx]   |*           |Function context              |
 *
 * ```javascript
 * each({'a': 1, 'b': 2}, function (val, key) {});
 * ```
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function each(
 *     obj: {} | any[], 
 *     iteratee: (val: any, key?: string | number, obj?: {} | any[]) => void, 
 *     ctx?: any
 * ): void
 */

_('isArrLike keys optimizeCb');

function exports(obj, iteratee, ctx) {
    iteratee = optimizeCb(iteratee, ctx);

    var i, len;

    if (isArrLike(obj)) {
        for (i = 0, len = obj.length; i < len; i++) iteratee(obj[i], i, obj);
    } else {
        var _keys = keys(obj);
        for (i = 0, len = _keys.length; i < len; i++) {
            iteratee(obj[_keys[i]], _keys[i], obj);
        }
    }

    return obj;
}
