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

exports =
    Date.now ||
    function() {
        return new Date().getTime();
    };
