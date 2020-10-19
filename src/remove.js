/* Remove all elements from array that predicate returns truthy for and return an array of the removed elements.
 *
 * Unlike filter, this method mutates array.
 *
 * |Name    |Desc                                |
 * |--------|------------------------------------|
 * |list    |Collection to iterate over          |
 * |iterator|Function invoked per iteration      |
 * |context |Predicate context                   |
 * |return  |Array of all values that are removed|
 */

/* example
 * const arr = [1, 2, 3, 4, 5];
 * const evens = remove(arr, function(val) {
 *     return val % 2 === 0;
 * });
 * console.log(arr); // -> [1, 3, 5]
 * console.log(evens); // -> [2, 4]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function remove<T, TResult>(
 *     list: types.List<T>,
 *     iterator: types.ListIterator<T, boolean>,
 *     context?: any
 * ): TResult[];
 */

_('safeCb types');

exports = function(arr, iterator, ctx) {
    const ret = [];

    iterator = safeCb(iterator, ctx);

    let i = -1;
    const len = arr.length;

    while (++i < len) {
        const val = arr[i];

        if (iterator(val, i, arr)) {
            ret.push(val);
            arr.splice(i, 1);
        }
    }

    return ret;
};
