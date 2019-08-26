/* Get execution time of a function.
 *
 * |Name  |Type    |Desc                    |
 * |------|--------|------------------------|
 * |fn    |function|Function to measure time|
 * |return|number  |Execution time, ms      |
 */

/* example
 * timeTaken(function () {
 *     // Do something.
 * }); // -> Time taken to execute given function.
 */

/* module
 * env: all
 * test: all
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
