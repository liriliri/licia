/* Inject link tag into page with given href value.
 *
 * |Name|Desc           |
 * |----|---------------|
 * |src |Style source   |
 * |cb  |Onload callback|
 */

/* example
 * loadCss('style.css', function(isLoaded) {
 *     // Do something...
 * });
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function loadCss(src: string, cb?: types.AnyFn): void;
 */

_('noop types');

exports = function(src, cb) {
    cb = cb || noop;

    const link = document.createElement('link');

    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.onerror = function() {
        cb(false);
    };
    link.onload = function() {
        cb(true);
    };
    link.href = src;

    document.head.appendChild(link);
};
