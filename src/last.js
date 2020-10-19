/* Get the last element of array.
 *
 * |Name  |Desc                     |
 * |------|-------------------------|
 * |arr   |The array to query       |
 * |return|The last element of array|
 */

/* example
 * last([1, 2]); // -> 2
 */

/* module
 * env: all
 */

/* typescript
 * export declare function last(arr: any[]): any;
 */

exports = function(arr) {
    const len = arr ? arr.length : 0;

    if (len) return arr[len - 1];
};
