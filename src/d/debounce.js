/* Return a new debounced version of the passed function.
 *
 * |Name  |Type    |Desc                           |
 * |------|--------|-------------------------------|
 * |fn    |function|Function to debounce           |
 * |wait  |number  |Number of milliseconds to delay|
 * |return|function|New debounced function         |
 */

/* example
 * const calLayout = debounce(function () {}, 300);
 * // $(window).resize(calLayout);
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function debounce(fn: Function, wait: number): Function;
 */

exports = function(fn, wait, immediate) {
    let timeout;

    return function() {
        const ctx = this;
        const args = arguments;

        const throttler = function() {
            timeout = null;
            fn.apply(ctx, args);
        };

        if (!immediate) clearTimeout(timeout);
        if (!immediate || !timeout) timeout = setTimeout(throttler, wait);
    };
};
