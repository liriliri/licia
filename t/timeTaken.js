/* Get execution time of a function.
 * 
 * |Name  |Type    |Desc                    |
 * |------|--------|------------------------|
 * |fn    |function|Function to measure time|
 * |return|number  |Execution time, ms      |
 * 
 * ```javascript
 * timeTaken(function () {
 *     // Do something.
 * }); // -> Time taken to execute given function.
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('perfNow');

function exports(fn) {
    var start = perfNow();

    fn();

    return perfNow() - start;
}
