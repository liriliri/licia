/* Intersect two ranges.
 *
 * |Name  |Type  |Desc                 |
 * |------|------|---------------------|
 * |a     |object|Range a              |
 * |b     |object|Range b              |
 * |return|object|Intersection if exist|
 * 
 * ```javascript
 * intersectRange({start: 0, end: 12}, {start: 11, end: 13});
 * // -> {start: 11, end: 12}
 * intersectRange({start: 0, end: 5}, {start: 6, end: 7});
 * // -> undefined
 * ```  
 */

/* module
 * env: all
 * test: all
 */

function exports(a, b) 
{
    var min = a.start < b.start ? a : b,
        max = min === a ? b : a;

    if (min.end < max.start) return;
    
    return {
        start: max.start,
        end: min.end < max.end ? min.end : max.end
    };
}