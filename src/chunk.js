/* Split array into groups the length of given size.
 *
 * |Name  |Desc                |
 * |------|--------------------|
 * |arr   |Array to process    |
 * |size=1|Length of each chunk|
 * |return|Chunks of given size|
 */

/* example
 * chunk([1, 2, 3, 4], 2); // -> [[1, 2], [3, 4]]
 * chunk([1, 2, 3, 4], 3); // -> [[1, 2, 3], [4]]
 * chunk([1, 2, 3, 4]); // -> [[1], [2], [3], [4]]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function chunk(arr: any[], size?: number): Array<any[]>;
 */

exports = function(arr, size) {
    const ret = [];

    size = size || 1;

    for (let i = 0, len = Math.ceil(arr.length / size); i < len; i++) {
        const start = i * size;
        const end = start + size;

        ret.push(arr.slice(start, end));
    }

    return ret;
};
