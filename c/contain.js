/* Check if the value is present in the list.
 *
 * |Name  |Type        |Desc                                |
 * |------|------------|------------------------------------|
 * |array |array object|Target list                         |
 * |value |*           |Value to check                      |
 * |return|boolean     |True if value is present in the list|
 *
 * ```javascript
 * contain([1, 2, 3], 1); // -> true
 * contain({a: 1, b: 2}, 1); // -> true
 * ```
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function contain(arr: any[], val: any): boolean
 */

_('idxOf isArrLike values');

function exports(arr, val) {
    if (!isArrLike(arr)) arr = values(arr);

    return idxOf(arr, val) >= 0;
}
