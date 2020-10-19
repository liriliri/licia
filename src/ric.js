/* Shortcut for requestIdleCallback.
 *
 * Use setTimeout if requestIdleCallback is not supported.
 */

/* example
 * const id = ric(function() {
 *     // Called during a browser's idle periods
 * });
 * ric.cancel(id);
 */

/* module
 * env: browser
 * test: manual
 * since: 1.4.0
 */

/* typescript
 * export declare namespace ric {
 *     function cancel(id: number);
 * }
 * export declare function ric(cb: types.AnyFn): number;
 */

_('root now types');

exports =
    root.requestIdleCallback ||
    function(cb) {
        const start = now();
        return setTimeout(function() {
            cb({
                didTimeout: false,
                timeRemaining() {
                    return Math.max(0, 50 - (now() - start));
                }
            });
        }, 1);
    };

exports.cancel =
    root.cancelIdleCallback ||
    function(id) {
        clearTimeout(id);
    };
