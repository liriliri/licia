/* Heap sort implementation.
 *
 * |Name  |Type    |Desc         |
 * |------|--------|-------------|
 * |arr   |array   |Array to sort|
 * |[cmp] |function|Comparator   |
 * |return|array   |Sorted array |
 */

/* example
 * heapSort([2, 1]); // -> [1, 2]
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function heapSort(arr: any[], cmp?: Function): any[];
 */

_('Heap');

exports = function(arr, cmp = comparator) {
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

function comparator(a, b) {
    return a - b;
}
