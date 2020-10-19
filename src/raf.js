/* Shortcut for requestAnimationFrame.
 *
 * Use setTimeout if native requestAnimationFrame is not supported.
 */

/* example
 * const id = raf(function tick() {
 *     // Animation stuff
 *     raf(tick);
 * });
 * raf.cancel(id);
 */

/* module
 * env: all
 */

/* typescript
 * export declare namespace raf {
 *     function cancel(id: number): void;
 * }
 * export declare function raf(cb: types.AnyFn): number;
 */

_('now isBrowser types');

let raf, cancel;
let lastTime = 0;

if (isBrowser) {
    raf = window.requestAnimationFrame;
    cancel = window.cancelAnimationFrame;

    const vendors = ['ms', 'moz', 'webkit', 'o'];

    for (let i = 0, len = vendors.length; i < len && !raf; i++) {
        raf = window[vendors[i] + 'RequestAnimationFrame'];
        cancel =
            window[vendors[i] + 'CancelAnimationFrame'] ||
            window[vendors[i] + 'CancelRequestAnimationFrame'];
    }
}

raf =
    raf ||
    function(cb) {
        const curTime = now();

        const timeToCall = Math.max(0, 16 - (curTime - lastTime));
        const id = setTimeout(function() {
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
