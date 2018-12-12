/* Return a new throttled version of the passed function.
 *
 * |Name  |Type    |Desc                           |
 * |------|--------|-------------------------------|
 * |fn    |function|Function to throttle           |
 * |wait  |number  |Number of milliseconds to delay|
 * |return|function|New throttled function         |
 */

/* example
 * const updatePos = throttle(function () {}, 100);
 * // $(window).scroll(updatePos);
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
