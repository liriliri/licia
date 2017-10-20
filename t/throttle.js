/* Return a new throttled version of the passed function.
 *
 * |Name  |Type    |Desc                           |
 * |------|--------|-------------------------------|
 * |fn    |function|Function to throttle           |
 * |wait  |number  |Number of milliseconds to delay|
 * |return|function|New throttled function         |
 *
 * ```javascript
 * $(window).scroll(throttle(updatePos, 100));
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('debounce');

function exports(fn, wait)
{
    return debounce(fn, wait, true);
}