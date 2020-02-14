/* Check if an array is sorted.
 *
 * |Name  |Desc                   |
 * |------|-----------------------|
 * |arr   |Array to check         |
 * |cmp   |Comparator             |
 * |return|True if array is sorted|
 */

/* example
 * isSorted([1, 2, 3]); // -> true
 * isSorted([3, 2, 1]); // -> false
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isSorted(arr: any[], cmp?: Function): boolean;
 */

exports = function(arr, cmp = exports.defComparator) {
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        if (cmp(arr[i], arr[i + 1]) > 0) return false;
    }

    return true;
};

exports.defComparator = function(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
};
