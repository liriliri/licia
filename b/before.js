/* Create a function that invokes less than n times.
 *
 * |Name  |Type    |Desc                                            |
 * |------|--------|------------------------------------------------|
 * |n     |number  |Number of calls at which fn is no longer invoked|
 * |fn    |function|Function to restrict                            |
 * |return|function|New restricted function                         |
 *
 * Subsequent calls to the created function return the result of the last fn invocation.
 *
 * ```javascript
 * $(element).on('click', before(5, function() {}));
 * // -> allow function to be call 4 times at last.
 * ```
 */

/* module
 * env: all
 * test: all
 */

function exports(n, fn)
{
    var memo;

    return function ()
    {
        if (--n > 0) memo = fn.apply(this, arguments);
        if (n <= 1) fn = null;

        return memo;
    };
}