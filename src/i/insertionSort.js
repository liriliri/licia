/* Insertion sort implementation.
 *
 * |Name  |Desc         |
 * |------|-------------|
 * |arr   |Array to sort|
 * |cmp   |Comparator   |
 * |return|Sorted array |
 */

/* example
 * insertionSort([2, 1]); // -> [1, 2]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function insertionSort(arr: any[], cmp?: types.AnyFn): any[];
 */

_('swap isSorted types');

exports = function(arr, cmp = isSorted.defComparator) {
    for (let i = 1, len = arr.length; i < len; i++) {
        for (let j = i; j > 0; j--) {
            if (cmp(arr[j], arr[j - 1]) < 0) {
                swap(arr, j, j - 1);
            } else {
                break;
            }
        }
    }

    return arr;
};
