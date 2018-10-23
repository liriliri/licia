/* Create an array of values by running each element in collection through iteratee.
 *
 * |Name    |Type        |Desc                          |
 * |--------|------------|------------------------------|
 * |obj     |array object|Collection to iterate over    |
 * |iteratee|function    |Function invoked per iteration|
 * |[ctx]   |*           |Function context              |
 * |return  |array       |New mapped array              |
 */

/* example
 * map([4, 8], function (n) { return n * n; }); // -> [16, 64]
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function map(
 *     obj: {} | any[],
 *     iteratee: (val: any, idx?: number | string, obj?: {} | any[]) => boolean,
 *     ctx?: any
 * ): any[]
 */

_('safeCb keys isArrLike');

exports = function(obj, iteratee, ctx) {
    iteratee = safeCb(iteratee, ctx);

    var _keys = !isArrLike(obj) && keys(obj),
        len = (_keys || obj).length,
        results = Array(len);

    for (var i = 0; i < len; i++) {
        var curKey = _keys ? _keys[i] : i;
        results[i] = iteratee(obj[curKey], curKey, obj);
    }

    return results;
};
