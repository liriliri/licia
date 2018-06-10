/* Swap two items in an array.
 *
 * |Name  |Type  |Desc         |
 * |------|------|-------------|
 * |arr   |array |Array to swap|
 * |a     |number|First index  |
 * |b     |number|Second index |
 * |return|array |Array given  |
 * 
 * ```javascript
 * var arr = [1, 2];
 * swap(arr, 0, 1); // -> [2, 1]
 * ```
 */

/* module
 * env: all
 * test: all
 */

function exports(arr, a, b) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;

    return arr;
}
