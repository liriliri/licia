/* Get the index at which the first occurrence of value.
 *
 * |Name     |Type  |Desc                |
 * |---------|------|--------------------|
 * |arr      |array |Array to search     |
 * |val      |*     |Value to search for |
 * |fromIdx=0|number|Index to search from|
 * |return   |number|Value index         |
 *
 * ```javascript
 * idxOf([1, 2, 1, 2], 2, 2); // -> 3
 * ```
 */

/* module
 * env: all
 * test: all
 */

function exports(arr, val, fromIdx) {
    return Array.prototype.indexOf.call(arr, val, fromIdx);
}
