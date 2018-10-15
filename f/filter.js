/* Iterates over elements of collection, returning an array of all the values that pass a truth test.
 *
 * |Name     |Type    |Desc                                   |
 * |---------|--------|---------------------------------------|
 * |obj      |array   |Collection to iterate over             |
 * |predicate|function|Function invoked per iteration         |
 * |[ctx]    |*       |Predicate context                      |
 * |return   |array   |Array of all values that pass predicate|
 *
 * ```javascript
 * filter([1, 2, 3, 4, 5], function (val) {
 *     return val % 2 === 0;
 * }); // -> [2, 4]
 * ```
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function filter(
 *     obj: {} | any[], 
 *     predicate: (val: any, idx?: number | string, obj?: {} | any[]) => boolean, 
 *     ctx?: any
 * ): any[]
 */

_('safeCb each');

function exports(obj, predicate, ctx) {
    var ret = [];

    predicate = safeCb(predicate, ctx);

    each(obj, function(val, idx, list) {
        if (predicate(val, idx, list)) ret.push(val);
    });

    return ret;
}
