/* Invoke callback when dom is ready, similar to jQuery ready.
 *
 * |Name|Type    |Desc             |
 * |----|--------|-----------------|
 * |fn  |function|Callback function|
 */

/* example
 * ready(function () {
 *     // It's safe to manipulate dom here.
 * });
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare function ready(fn: Function): void;
 */

var fns = [],
    listener,
    doc = document,
    hack = doc.documentElement.doScroll,
    domContentLoaded = 'DOMContentLoaded',
    loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);

if (!loaded) {
    doc.addEventListener(
        domContentLoaded,
        (listener = function() {
            doc.removeEventListener(domContentLoaded, listener);
            loaded = 1;
            /* eslint-disable no-cond-assign */
            while ((listener = fns.shift())) listener();
        })
    );
}

exports = function(fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
};
