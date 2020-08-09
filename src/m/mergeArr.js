/* Merge the contents of arrays together into the first array.
 *
 * |Name  |Desc                                |
 * |------|------------------------------------|
 * |first |Array to merge                      |
 * |arrays|Arrays to merge into the first array|
 * |return|First array                         |
 */

/* example
 * const a = [1, 2];
 * mergeArr(a, [3, 4], [5, 6]);
 * console.log(a); // -> [1, 2, 3, 4, 5, 6]
 */

/* module
 * env: all
 * since: 1.24.0
 */

/* typescript
 * export declare function mergeArr<T, U>(
 *     first: ArrayLike<T>,
 *     ...arrays: ArrayLike<U>[]
 * ): ArrayLike<T | U>;
 */

_('restArgs');

exports = restArgs(function(first, arrays) {
    let end = first.length;

    for (let i = 0, len = arrays.length; i < len; i++) {
        const arr = arrays[i];
        for (let j = 0, len = arr.length; j < len; j++) {
            first[end++] = arr[j];
        }
    }

    first.length = end;

    return first;
});
