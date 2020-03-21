/* Return a new throttled version of the passed function.
 *
 * |Name  |Desc                           |
 * |------|-------------------------------|
 * |fn    |Function to throttle           |
 * |wait  |Number of milliseconds to delay|
 * |return|New throttled function         |
 */

/* example
 * const updatePos = throttle(function () {}, 100);
 * // $(window).scroll(updatePos);
 */

/* module
 * env: all
 */

/* typescript
 * export declare function throttle<T extends types.AnyFn>(fn: T, wait: number): T;
 */

_('debounce types');

exports = function(fn, wait) {
    return debounce(fn, wait, true);
};
