/* Check if the value is present in the list.
 *
 * |Name  |Type               |Desc                                |
 * |------|-------------------|------------------------------------|
 * |target|array object string|Target object                       |
 * |value |*                  |Value to check                      |
 * |return|boolean            |True if value is present in the list|
 */

/* example
 * contain([1, 2, 3], 1); // -> true
 * contain({a: 1, b: 2}, 1); // -> true
 * contain('abc', 'a'); // -> true
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function contain(
 *     arr: any[] | {} | string,
 *     val: any
 * ): boolean;
 */

_('idxOf isStr isArrLike values');

exports = function(arr, val) {
    if (isStr(arr)) return arr.indexOf(val) > -1;
    if (!isArrLike(arr)) arr = values(arr);

    return idxOf(arr, val) >= 0;
};
