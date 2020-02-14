/* Shell sort implementation.
 *
 * |Name  |Desc         |
 * |------|-------------|
 * |arr   |Array to sort|
 * |cmp   |Comparator   |
 * |return|Sorted array |
 */

/* example
 * shellSort([2, 1]); // -> [1, 2]
 */

/* module
 * env: all
 * since: 1.5.0
 */

/* typescript
 * export declare function shellSort(arr: any[], cmp?: Function): any[];
 */

_('swap isSorted');

exports = function(arr, cmp = isSorted.defComparator) {
    const len = arr.length;
    let gap = Math.floor(len / 2);

    while (gap > 0) {
        for (let i = gap; i <= len - gap; i++) {
            for (let j = i; j > 0; j -= gap) {
                if (cmp(arr[j], arr[j - gap]) < 0) {
                    swap(arr, j, j - gap);
                } else {
                    break;
                }
            }
        }

        gap = Math.floor(gap / 2);
    }

    return arr;
};
