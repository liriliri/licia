/* Inject script tag into page with given src value.
 *
 * |Name|Desc           |
 * |----|---------------|
 * |src |Script source  |
 * |cb  |Onload callback|
 */

/* example
 * loadJs('main.js', function(isLoaded) {
 *     // Do something...
 * });
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function loadJs(src: string, cb?: types.AnyFn): void;
 */

_('types');

exports = function(src, cb) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = function() {
        const isNotLoaded =
            script.readyState &&
            script.readyState != 'complete' &&
            script.readyState != 'loaded';

        cb && cb(!isNotLoaded);
    };
    script.onerror = function() {
        cb(false);
    };
    document.body.appendChild(script);
};
