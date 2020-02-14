/* Get the index at which the first occurrence of value.
 *
 * |Name     |Desc                |
 * |---------|--------------------|
 * |arr      |Array to search     |
 * |val      |Value to search for |
 * |fromIdx=0|Index to search from|
 * |return   |Value index         |
 */

/* example
 * idxOf([1, 2, 1, 2], 2, 2); // -> 3
 */

/* module
 * env: all
 */

/* typescript
 * export declare function idxOf(arr: any[], val: any, fromIdx?: number): number;
 */

exports = function(arr, val, fromIdx) {
    return Array.prototype.indexOf.call(arr, val, fromIdx);
};
