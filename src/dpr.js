/* Device pixel ratio helper.
 *
 * ### on
 *
 * Bind change event.
 *
 * ### off
 *
 * Unbind change event.
 *
 * ### get
 *
 * Get current device pixel ratio.
 */

/* example
 * dpr.on('change', function(dpr) {
 *     console.log(dpr); // -> 2
 * });
 * dpr.get(); // -> 1
 */

/* module
 * env: browser
 * since: 1.46.0
 */

/* typescript
 * export declare namespace dpr {
 *     interface IDpr extends Emitter {
 *         get(): number;
 *     }
 * }
 * export declare const dpr: dpr.IDpr;
 */

_('Emitter MediaQuery');

const m = new MediaQuery(`(resolution: ${get()}dppx)`);

exports = {
    get
};

Emitter.mixin(exports);

function get() {
    return window.devicePixelRatio || 1;
}

function change() {
    const dpr = get();
    m.setQuery(`(resolution: ${dpr}dppx)`);
    exports.emit('change', dpr);
}

m.on('unmatch', change);
