/* Selection sort implementation.
 *
 * |Name  |Type    |Desc         |
 * |------|--------|-------------|
 * |arr   |array   |Array to sort|
 * |[cmp] |function|Comparator   |
 * |return|array   |Sorted array |
 */

/* example
 * selectionSort([2, 1]); // -> [1, 2]
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function selectionSort(arr: any[], cmp?: Function): any[];
 */

_('swap');

exports = function(arr, cmp) {
    cmp = cmp || comparator;

    let min;

    for (let i = 0, len = arr.length; i < len; i++) {
        min = i;
        for (let j = i + 1; j < len; j++) {
            if (cmp(arr[j], arr[min]) < 0) {
                min = j;
            }
        }
        if (i != min) {
            swap(arr, i, min);
        }
    }

    return arr;
};

function comparator(a, b) {
    return a - b;
}
