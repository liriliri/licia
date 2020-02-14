/* Calculate fibonacci number.
 *
 * |Name  |Desc                       |
 * |------|---------------------------|
 * |n     |Index of fibonacci sequence|
 * |return|Expected fibonacci number  |
 */

/* example
 * fibonacci(1); // -> 1
 * fibonacci(3); // -> 2
 */

/* module
 * env: all
 */

/* typescript
 * export declare function fibonacci(n: number): number;
 */

_('memoize');

exports = memoize(function(n) {
    return n < 2 ? n : exports(n - 1) + exports(n - 2);
});
