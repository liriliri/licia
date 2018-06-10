/* Calculate fibonacci number.
 *
 * |Name  |Type  |Desc                       |
 * |------|------|---------------------------|
 * |n     |number|Index of fibonacci sequence|
 * |return|number|Expected fibonacci number  |
 * 
 * ```javascript
 * fibonacci(1); // -> 1
 * fibonacci(3); // -> 2
 * ```
 */

_('memoize');

exports = memoize(function(n) {
    return n < 2 ? n : exports(n - 1) + exports(n - 2);
});
