/* Inject script tag into page with given src value.
 *
 * |Name|Type    |Desc           |
 * |----|--------|---------------|
 * |src |string  |Script source  |
 * |cb  |function|Onload callback|
 */

/* example
 * loadJs('main.js', function (isLoaded) {
 *     // Do something...
 * });
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare function loadJs(src: string, cb?: (isLoaded: boolean) => void): void
 */

exports = function(src, cb) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = function() {
        var isNotLoaded =
            script.readyState &&
            script.readyState != 'complete' &&
            script.readyState != 'loaded';

        cb && cb(!isNotLoaded);
    };
    document.body.appendChild(script);
};
