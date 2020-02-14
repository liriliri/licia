/* Heap sort implementation.
 *
 * |Name  |Desc         |
 * |------|-------------|
 * |arr   |Array to sort|
 * |cmp   |Comparator   |
 * |return|Sorted array |
 */

/* example
 * heapSort([2, 1]); // -> [1, 2]
 */

/* module
 * env: all
 * since: 1.11.0
 */

/* typescript
 * export declare function heapSort(arr: any[], cmp?: Function): any[];
 */

_('Heap isSorted');

exports = function(arr, cmp = isSorted.defComparator) {
    const heap = new Heap(cmp);
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        heap.add(arr[i]);
    }
    for (let i = 0; i < len; i++) {
        arr[i] = heap.poll();
    }
    return arr;
};
