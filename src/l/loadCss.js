/* Inject link tag into page with given href value.
 *
 * |Name|Type    |Desc           |
 * |----|--------|---------------|
 * |src |string  |Style source   |
 * |cb  |function|Onload callback|
 */

/* example
 * loadCss('style.css', function (isLoaded) {
 *     // Do something...
 * });
 */

/* module
 * env: browser
 * test: browser
 */

_('noop');

exports = function(src, cb) {
    cb = cb || noop;

    var link = document.createElement('link');

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
