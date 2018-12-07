/* Return a new throttled version of the passed function.
 *
 * |Name  |Type    |Desc                           |
 * |------|--------|-------------------------------|
 * |fn    |function|Function to throttle           |
 * |wait  |number  |Number of milliseconds to delay|
 * |return|function|New throttled function         |
 */

/* example
 * $(window).scroll(throttle(updatePos, 100));
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function throttle(fn: Function, wait: number): Function;
 */

_('debounce');

exports = function(fn, wait) {
    return debounce(fn, wait, true);
};
