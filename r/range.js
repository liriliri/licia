/* Create flexibly-numbered lists of integers.
 *
 * |Name   |Type  |Desc                              |
 * |-------|------|----------------------------------|
 * |[start]|number|Start of the range                |
 * |end    |number|End of the range                  |
 * |step=1 |number|Value to increment or decrement by|
 */

/* example
 * range(5); // -> [0, 1, 2, 3, 4]
 * range(0, 5, 2) // -> [0, 2, 4]
 */

/* module
 * env: all
 * test: all
 */

function exports(start, end, step) {
    if (end == null) {
        end = start || 0;
        start = 0;
    }

    if (!step) step = end < start ? -1 : 1;

    var len = Math.max(Math.ceil((end - start) / step), 0),
        ret = Array(len);

    for (var i = 0; i < len; i++, start += step) ret[i] = start;

    return ret;
}
