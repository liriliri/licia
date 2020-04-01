/* Create slice of source array or array-like object.
 *
 * |Name            |Desc                      |
 * |----------------|--------------------------|
 * |array           |Array to slice            |
 * |start=0         |Start position            |
 * |end=array.length|End position, not included|
 */

/* example
 * slice([1, 2, 3, 4], 1, 2); // -> [2]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function slice(
 *     array: any[],
 *     start?: number,
 *     end?: number
 * ): any[];
 */

exports = function(arr, start, end) {
    const len = arr.length;

    if (start == null) {
        start = 0;
    } else if (start < 0) {
        start = Math.max(len + start, 0);
    } else {
        start = Math.min(start, len);
    }

    if (end == null) {
        end = len;
    } else if (end < 0) {
        end = Math.max(len + end, 0);
    } else {
        end = Math.min(end, len);
    }

    const ret = [];
    while (start < end) ret.push(arr[start++]);

    return ret;
};
