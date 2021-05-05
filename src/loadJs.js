/* Inject script tag into page with given src value.
 *
 * |Name       |Desc           |
 * |-----------|---------------|
 * |src        |Script source  |
 * |cb         |Onload callback|
 * |async=false|async or not   |
 * |defer=false|defered or not |
 */

/* example
 * loadJs('main.js', function(isLoaded) {
 *     // Do something...
 * }, true, false);
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function loadJs(src: string, cb?: types.AnyFn, async?: boolean, defer?: boolean): void;
 */

_('types');

exports = function(src, cb, async, defer) {
    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;
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
