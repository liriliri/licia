/* Intersect two ranges.
 *
 * |Name  |Desc                 |
 * |------|---------------------|
 * |a     |Range a              |
 * |b     |Range b              |
 * |return|Intersection if exist|
 */

/* example
 * intersectRange({ start: 0, end: 12 }, { start: 11, end: 13 });
 * // -> {start: 11, end: 12}
 * intersectRange({ start: 0, end: 5 }, { start: 6, end: 7 });
 * // -> undefined
 */

/* module
 * env: all
 */

/* typescript
 * export declare namespace intersectRange {
 *     interface IRange {
 *         start: number;
 *         end: number;
 *     }
 * }
 * export declare function intersectRange(
 *     a: intersectRange.IRange,
 *     b: intersectRange.IRange
 * ): intersectRange.IRange | void;
 */

exports = function(a, b) {
    const min = a.start < b.start ? a : b;
    const max = min === a ? b : a;

    if (min.end < max.start) return;

    return {
        start: max.start,
        end: min.end < max.end ? min.end : max.end
    };
};
