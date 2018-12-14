/* Invoke function after certain milliseconds.
 *
 * |Name     |Type    |Desc                                      |
 * |---------|--------|------------------------------------------|
 * |fn       |function|Function to delay                         |
 * |wait     |number  |Number of milliseconds to delay invocation|
 * |[...args]|*       |Arguments to invoke fn with               |
 */

/* example
 * delay(function (text) {
 *     console.log(text);
 * }, 1000, 'later');
 * // -> Logs 'later' after one second
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function delay(fn: Function, wait: number, ...args: any[]): void;
 */

_('restArgs');

exports = restArgs(function(fn, wait, args) {
    return setTimeout(function() {
        return fn.apply(null, args);
    }, wait);
});
