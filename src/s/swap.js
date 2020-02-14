/* Swap two items in an array.
 *
 * |Name  |Desc         |
 * |------|-------------|
 * |arr   |Array to swap|
 * |a     |First index  |
 * |b     |Second index |
 * |return|Array given  |
 */

/* example
 * const arr = [1, 2];
 * swap(arr, 0, 1); // -> [2, 1]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function swap(arr: any[], a: number, b: number): any[];
 */

exports = function(arr, a, b) {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;

    return arr;
};
