/* Swap two items in an array.
 *
 * |Name  |Type  |Desc         |
 * |------|------|-------------|
 * |arr   |array |Array to swap|
 * |a     |number|First index  |
 * |b     |number|Second index |
 * |return|array |Array given  |
 */

/* example
 * var arr = [1, 2];
 * swap(arr, 0, 1); // -> [2, 1]
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function swap(arr: any[], a: number, b: number): any[];
 */

exports = function(arr, a, b) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;

    return arr;
};
