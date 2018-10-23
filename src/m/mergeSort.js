/* Merge sort implementation.
 *
 * Note: It's not an "in-place" sort.
 * 
 * |Name |Type    |Desc         |
 * |-----|--------|-------------|
 * |arr  |array   |Array to sort|
 * |[cmp]|function|Comparator   |
 */

/* example
 * mergeSort([2, 1]); // -> [1, 2]
 */

/* module
 * env: all
 * test: all
 */

exports = function(arr, cmp) {
    cmp = cmp || comparator;

    if (arr.length <= 1) return arr;

    var middle = floor(arr.length / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);

    return merge(exports(left, cmp), exports(right, cmp), cmp);
};

function merge(left, right, cmp) {
    var ret = [],
        i = 0,
        j = 0;

    while (i < left.length && j < right.length) {
        cmp(left[i], right[j]) < 0 ? ret.push(left[i++]) : ret.push(right[j++]);
    }

    while (i < left.length) ret.push(left[i++]);
    while (j < right.length) ret.push(right[j++]);

    return ret;
}

function comparator(a, b) {
    return a - b;
}

var floor = Math.floor;
