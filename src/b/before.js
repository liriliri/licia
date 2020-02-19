/* Create a function that invokes less than n times.
 *
 * |Name  |Desc                                            |
 * |------|------------------------------------------------|
 * |n     |Number of calls at which fn is no longer invoked|
 * |fn    |Function to restrict                            |
 * |return|New restricted function                         |
 *
 * Subsequent calls to the created function return the result of the last fn invocation.
 */

/* example
 * const fn = before(5, function() {});
 * fn(); // Allow function to be call 4 times at last.
 */

/* module
 * env: all
 */

/* typescript
 * export declare function before(n: number, fn: Function): Function;
 */

exports = function(n, fn) {
    let memo;

    return function() {
        if (--n > 0) memo = fn.apply(this, arguments);
        if (n <= 1) fn = null;

        return memo;
    };
};
