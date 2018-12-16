/* Shortcut for requestIdleCallback.
 *
 * Use setTimeout if requestIdleCallback is not supported.
 */

/* example
 * const id = ric(function () {
 *     // Called during a browser's idle periods
 * });
 * ric.cancel(id);
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare namespace ric {
 *     function cancel(id: number);
 * }
 * export declare function ric(cb: Function): number;
 */

_('root now');

exports =
    root.requestIdleCallback ||
    function(cb) {
        const start = now();
        return setTimeout(function() {
            cb({
                didTimeout: false,
                timeRemaining: function() {
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
