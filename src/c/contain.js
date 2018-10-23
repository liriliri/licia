/* Check if the value is present in the list.
 *
 * |Name  |Type        |Desc                                |
 * |------|------------|------------------------------------|
 * |array |array object|Target list                         |
 * |value |*           |Value to check                      |
 * |return|boolean     |True if value is present in the list|
 */

/* example
 * contain([1, 2, 3], 1); // -> true
 * contain({a: 1, b: 2}, 1); // -> true
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function contain(arr: any[], val: any): boolean
 */

_('idxOf isArrLike values');

exports = function(arr, val) {
    if (!isArrLike(arr)) arr = values(arr);

    return idxOf(arr, val) >= 0;
};
