/* High resolution time up to microsecond precision.
 */

/* example
 * const start = perfNow();
 *
 * // Do something.
 *
 * console.log(perfNow() - start);
 */

/* module
 * env: all
 */

/* typescript
 * export declare function perfNow(): number;
 */

_('now root');

const performance = root.performance;
const process = root.process;
let loadTime;

if (performance && performance.now) {
    exports = function() {
        return performance.now();
    };
} else if (process && process.hrtime) {
    const getNanoSeconds = function() {
        const hr = process.hrtime();
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
