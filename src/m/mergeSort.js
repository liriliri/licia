/* Merge sort implementation.
 *
 * Note: It's not an "in-place" sort.
 *
 * |Name  |Type    |Desc         |
 * |------|--------|-------------|
 * |arr   |array   |Array to sort|
 * |[cmp] |function|Comparator   |
 * |return|array   |Sorted array |
 */

/* example
 * mergeSort([2, 1]); // -> [1, 2]
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function mergeSort(arr: any[], cmp?: Function): any[];
 */

_('isSorted');

exports = function(arr, cmp = isSorted.defComparator) {
    if (arr.length <= 1) return arr;

    const middle = floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(exports(left, cmp), exports(right, cmp), cmp);
};

function merge(left, right, cmp) {
    const ret = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        cmp(left[i], right[j]) < 0 ? ret.push(left[i++]) : ret.push(right[j++]);
    }

    while (i < left.length) ret.push(left[i++]);
    while (j < right.length) ret.push(right[j++]);

    return ret;
}

const floor = Math.floor;
