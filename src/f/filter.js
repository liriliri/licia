/* Iterates over elements of collection, returning an array of all the values that pass a truth test.
 *
 * |Name     |Desc                                   |
 * |---------|---------------------------------------|
 * |obj      |Collection to iterate over             |
 * |predicate|Function invoked per iteration         |
 * |ctx      |Predicate context                      |
 * |return   |Array of all values that pass predicate|
 */

/* example
 * filter([1, 2, 3, 4, 5], function (val) {
 *     return val % 2 === 0;
 * }); // -> [2, 4]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function filter<T>(
 *     list: types.List<T>,
 *     iterator: types.ListIterator<T, boolean>,
 *     context?: any
 * ): T[];
 * export declare function filter<T>(
 *     object: types.Dictionary<T>,
 *     iterator: types.ObjectIterator<T, boolean>,
 *     context?: any
 * ): T[];
 */

/* eslint-disable no-unused-vars */
_('safeCb each types');

exports = function(obj, predicate, ctx) {
    const ret = [];

    predicate = safeCb(predicate, ctx);

    each(obj, function(val, idx, list) {
        if (predicate(val, idx, list)) ret.push(val);
    });

    return ret;
};
