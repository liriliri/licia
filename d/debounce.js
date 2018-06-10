/* Return a new debounced version of the passed function.
 *
 * |Name  |Type    |Desc                           |
 * |------|--------|-------------------------------|
 * |fn    |function|Function to debounce           |
 * |wait  |number  |Number of milliseconds to delay|
 * |return|function|New debounced function         |
 *
 * ```javascript
 * $(window).resize(debounce(calLayout, 300));
 * ```
 */

/* module
 * env: all
 * test: all
 */

function exports(fn, wait, immediate) {
    var timeout;

    return function() {
        var ctx = this,
            args = arguments;

        var throttler = function() {
            timeout = null;
            fn.apply(ctx, args);
        };

        if (!immediate) clearTimeout(timeout);
        if (!immediate || !timeout) timeout = setTimeout(throttler, wait);
    };
}
