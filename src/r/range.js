/* Create flexibly-numbered lists of integers.
 *
 * |Name  |Desc                              |
 * |------|----------------------------------|
 * |start |Start of the range                |
 * |end   |End of the range                  |
 * |step=1|Value to increment or decrement by|
 * |return|List of integers                  |
 */

/* example
 * range(5); // -> [0, 1, 2, 3, 4]
 * range(0, 5, 2); // -> [0, 2, 4]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function range(
 *     start: number,
 *     end?: number,
 *     step?: number
 * ): number[];
 */

exports = function(start, end, step) {
    if (end == null) {
        end = start || 0;
        start = 0;
    }

    if (!step) step = end < start ? -1 : 1;

    const len = Math.max(Math.ceil((end - start) / step), 0);
    const ret = Array(len);

    for (let i = 0; i < len; i++, start += step) ret[i] = start;

    return ret;
};
