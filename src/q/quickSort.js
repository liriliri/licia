/* Quick sort implementation.
 *
 * |Name |Type    |Desc         |
 * |-----|--------|-------------|
 * |arr  |array   |Array to sort|
 * |[cmp]|function|Comparator   |
 */

/* example
 * quickSort([2, 1]); // -> [1, 2]
 */

/* module
 * env: all
 * test: all
 */

_('swap');

function exports(arr, cmp) {
    cmp = cmp || comparator;

    return quickSort(arr, 0, arr.length - 1, cmp);
}

function quickSort(arr, left, right, cmp) {
    var idx;

    if (arr.length <= 1) return arr;

    idx = partition(arr, left, right, cmp);

    if (left < idx - 1) quickSort(arr, left, idx - 1, cmp);
    if (idx < right) quickSort(arr, idx, right, cmp);

    return arr;
}

function partition(arr, left, right, cmp) {
    var pivot = arr[floor((right + left) / 2)];

    while (left <= right) {
        while (cmp(arr[left], pivot) < 0) left++;
        while (cmp(arr[right], pivot) > 0) right--;
        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }

    return left;
}

var floor = Math.floor;

function comparator(a, b) {
    return a - b;
}
