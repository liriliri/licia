/* Opposite of filter.
 *
 * |Name     |Desc                                          |
 * |---------|----------------------------------------------|
 * |obj      |Collection to iterate over                    |
 * |predicate|Function invoked per iteration                |
 * |ctx      |Predicate context                             |
 * |return   |Array of all values that didn't pass predicate|
 */

/* example
 * reject([1, 2, 3, 4, 5], function (val) {
 *     return val % 2 === 0;
 * }); // -> [1, 3, 5]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function reject<T>(
 *     list: types.List<T>,
 *     iterator: types.ListIterator<T, boolean>,
 *     context?: any
 * ): T[];
 * export declare function reject<T>(
 *     object: types.Dictionary<T>,
 *     iterator: types.ObjectIterator<T, boolean>,
 *     context?: any
 * ): T[];
 */

/* eslint-disable no-unused-vars */
_('safeCb negate filter types');

exports = function(obj, predicate, ctx) {
    predicate = safeCb(negate(predicate), ctx);

    return filter(obj, predicate);
};
