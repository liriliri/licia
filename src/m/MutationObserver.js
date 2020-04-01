/* Safe MutationObserver, does nothing if MutationObserver is not supported.
 */

/* example
 * const observer = new MutationObserver(function(mutations) {
 *     // Do something.
 * });
 * observer.observe(document.documentElement);
 * observer.disconnect();
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 */

_('Class');

exports =
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver;

if (!exports) {
    exports = Class({
        initialize: function MutationObserver() {},
        observe() {},
        disconnect() {},
        takeRecords() {}
    });
}
