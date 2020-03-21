/* Bubble sort implementation.
 *
 * |Name  |Desc         |
 * |------|-------------|
 * |arr   |Array to sort|
 * |cmp   |Comparator   |
 * |return|Sorted array |
 */

/* example
 * bubbleSort([2, 1]); // -> [1, 2]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function bubbleSort(arr: any[], cmp?: types.AnyFn): any[];
 */

_('swap isSorted types');

exports = function(arr, cmp = isSorted.defComparator) {
    for (let i = 0, len = arr.length; i < len; i++) {
        for (let j = i; j > 0; j--) {
            if (cmp(arr[j], arr[j - 1]) < 0) {
                swap(arr, j, j - 1);
            }
        }
    }

    return arr;
};
