/* Binary search implementation.
 *
 * |Name        |Type    |Desc         |
 * |------------|--------|-------------|
 * |array       |array   |Sorted array |
 * |value       |*       |Value to seek|
 * |[comparator]|function|Comparator   |
 * |return      |number  |Value index  |
 */

/* example
 * binarySearch([1, 2, 3], 2); // -> 1
 * binarySearch([1, 2], 3); // -> -1
 * binarySearch(
 *     [
 *         {
 *             key: 1
 *         },
 *         {
 *             key: 2
 *         }
 *     ],
 *     { key: 1 },
 *     (a, b) => {
 *         if (a.key === b.key) return 0;
 *         return a.key < b.key ? -1 : 1;
 *     }
 * ); // -> 0
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function binarySearch(
 *     array: any[],
 *     value: any,
 *     comparator?: Function
 * ): number;
 */

exports = function(arr, val, cmp) {
    cmp = cmp || comparator;

    let startIdx = 0;
    let endIdx = arr.length - 1;

    while (startIdx <= endIdx) {
        const middleIdx = startIdx + Math.floor((endIdx - startIdx) / 2);
        const middleVal = arr[middleIdx];

        if (cmp(middleVal, val) === 0) {
            return middleIdx;
        }

        if (cmp(middleVal, val) < 0) {
            startIdx = middleIdx + 1;
        } else {
            endIdx = middleIdx - 1;
        }
    }

    return -1;
};

function comparator(a, b) {
    return a - b;
}
