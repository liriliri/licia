/* Check if values are close(almost equal) to each other.
 *
 * `abs(a-b) <= max(relTol * max(abs(a), abs(b)), absTol)`
 *
 * |Name       |Desc                    |
 * |-----------|------------------------|
 * |a          |Number to compare       |
 * |b          |Number to compare       |
 * |relTol=1e-9|Relative tolerance      |
 * |absTol=0   |Absolute tolerance      |
 * |return     |True if values are close|
 */

/* example
 * isClose(1, 1.0000000001); // -> true
 * isClose(1, 2); // -> false
 * isClose(1, 1.2, 0.3); // -> true
 * isClose(1, 1.2, 0.1, 0.3); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isClose(
 *     a: number,
 *     b: number,
 *     relTol?: number,
 *     absTol?: number
 * ): boolean;
 */

_('isNum');

exports = function(a, b, relTol, absTol) {
    if (!isNum(relTol)) relTol = 1e-9;
    if (!isNum(absTol)) absTol = 0;

    return abs(a - b) <= max(relTol * max(abs(a), abs(b)), absTol);
};

const abs = Math.abs;
const max = Math.max;
