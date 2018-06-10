/* Clamp number within the inclusive lower and upper bounds.
 *
 * |Name   |Type  |Desc           |
 * |-------|------|---------------|
 * |n      |number|Number to clamp|
 * |[lower]|number|Lower bound    |
 * |upper  |number|Upper bound    |
 * |return |number|Clamped number |
 *
 * ```javascript
 * clamp(-10, -5, 5); // -> -5
 * clamp(10, -5, 5); // -> 5
 * clamp(2, -5, 5); // -> 2
 * clamp(10, 5); // -> 5
 * clamp(2, 5); // -> 2
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('isUndef');

function exports(n, lower, upper) {
    if (isUndef(upper)) {
        upper = lower;
        lower = undefined;
    }

    if (!isUndef(lower) && n < lower) return lower;

    if (n > upper) return upper;

    return n;
}
