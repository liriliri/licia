/* High resolution time up to microsecond precision.
 *
 * ```javascript
 * var start = perfNow();
 * 
 * // Do something.
 * 
 * console.log(perfNow() - start);
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('now root');

var performance = root.performance,
    process = root.process,
    loadTime;

if (performance && performance.now) {
    exports = function() {
        return performance.now();
    };
} else if (process && process.hrtime) {
    var getNanoSeconds = function() {
        var hr = process.hrtime();
        return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds() - process.uptime() * 1e9;
    exports = function() {
        return (getNanoSeconds() - loadTime) / 1e6;
    };
} else {
    loadTime = now();
    exports = function() {
        return now() - loadTime;
    };
}
