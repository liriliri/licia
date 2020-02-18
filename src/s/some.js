/* Check if predicate return truthy for any element.
 *
 * |Name     |Desc                                          |
 * |---------|----------------------------------------------|
 * |obj      |Collection to iterate over                    |
 * |predicate|Function to invoked per iteration             |
 * |ctx      |Predicate context                             |
 * |return   |True if any element passes the predicate check|
 */

/* example
 * some([2, 5], function (val) {
 *     return val % 2 === 0;
 * }); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function some<T>(
 *     list: types.List<T>,
 *     iterator?: types.ListIterator<T, boolean>,
 *     context?: any
 * ): boolean;
 * export declare function some<T>(
 *     object: types.Dictionary<T>,
 *     iterator?: types.ObjectIterator<T, boolean>,
 *     context?: any
 * ): boolean;
 */

/* eslint-disable no-unused-vars */
_('safeCb isArrLike keys types');

exports = function(obj, predicate, ctx) {
    predicate = safeCb(predicate, ctx);

    const _keys = !isArrLike(obj) && keys(obj);
    const len = (_keys || obj).length;

    for (let i = 0; i < len; i++) {
        const key = _keys ? _keys[i] : i;
        if (predicate(obj[key], key, obj)) return true;
    }

    return false;
};
