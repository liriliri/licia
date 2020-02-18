/* Invoke callback when dom is ready, similar to jQuery ready.
 *
 * |Name|Desc             |
 * |----|-----------------|
 * |fn  |Callback function|
 */

/* example
 * ready(function () {
 *     // It's safe to manipulate dom here.
 * });
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function ready(fn: Function): void;
 */

const fns = [];
let listener;
const doc = document;
const hack = doc.documentElement.doScroll;
const domContentLoaded = 'DOMContentLoaded';
let loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);

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
