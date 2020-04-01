/* Invoke function after certain milliseconds.
 *
 * |Name   |Desc                                      |
 * |-------|------------------------------------------|
 * |fn     |Function to delay                         |
 * |wait   |Number of milliseconds to delay invocation|
 * |...args|Arguments to invoke fn with               |
 */

/* example
 * delay(function (text) {
 *     console.log(text);
 * }, 1000, 'later');
 * // -> Logs 'later' after one second
 */

/* module
 * env: all
 */

/* typescript
 * export declare function delay(
 *     fn: types.AnyFn,
 *     wait: number,
 *     ...args: any[]
 * ): void;
 */

_('restArgs types');

exports = restArgs(function(fn, wait, args) {
    return setTimeout(function() {
        return fn.apply(null, args);
    }, wait);
});
