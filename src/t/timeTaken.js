/* Get execution time of a function.
 *
 * |Name  |Desc                    |
 * |------|------------------------|
 * |fn    |Function to measure time|
 * |return|Execution time, ms      |
 */

/* example
 * timeTaken(function () {
 *     // Do something.
 * }); // -> Time taken to execute given function.
 */

/* module
 * env: all
 */

/* typescript
 * export declare function timeTaken(fn: Function): number;
 */

_('perfNow');

exports = function(fn) {
    const start = perfNow();

    fn();

    return perfNow() - start;
};
