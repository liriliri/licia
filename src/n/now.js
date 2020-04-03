/* Gets the number of milliseconds that have elapsed since the Unix epoch.
 */

/* example
 * now(); // -> 1468826678701
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function now(): number;
 */

if (Date.now && !LICIA_TEST) {
    exports = Date.now;
} else {
    exports = function() {
        return new Date().getTime();
    };
}
