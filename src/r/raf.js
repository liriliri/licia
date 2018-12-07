/* Shortcut for requestAnimationFrame.
 *
 * Use setTimeout if native requestAnimationFrame is not supported.
 */

/* example
 * var id = raf(function tick() {
 *     // Animation stuff
 *     raf(tick);
 * });
 * raf.cancel(id);
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * declare namespace raf {
 *     function cancel(id: number);
 * }
 * export declare function raf(cb: Function): number;
 */

_('now isBrowser');

var raf, cancel;

if (isBrowser) {
    raf = window.requestAnimationFrame;
    cancel = window.cancelAnimationFrame;

    var lastTime = 0,
        vendors = ['ms', 'moz', 'webkit', 'o'];

    for (var i = 0, len = vendors.length; i < len && !raf; i++) {
        raf = window[vendors[i] + 'RequestAnimationFrame'];
        cancel =
            window[vendors[i] + 'CancelAnimationFrame'] ||
            window[vendors[i] + 'CancelRequestAnimationFrame'];
    }
}

raf =
    raf ||
    function(cb) {
        var curTime = now();

        var timeToCall = Math.max(0, 16 - (curTime - lastTime)),
            id = setTimeout(function() {
                cb(curTime + timeToCall);
            }, timeToCall);

        lastTime = curTime + timeToCall;

        return id;
    };

cancel =
    cancel ||
    function(id) {
        clearTimeout(id);
    };

raf.cancel = cancel;

exports = raf;
