/* Create a function that invokes once it's called n or more times.
 *
 * |Name  |Desc                          |
 * |------|------------------------------|
 * |n     |Number of calls before invoked|
 * |fn    |Function to restrict          |
 * |return|New restricted function       |
 */

/* example
 * const fn = after(5, function() {
 *     // -> Only invoke after fn is called 5 times.
 * });
 */

/* module
 * env: all
 */

/* typescript
 * export declare function after(n: number, fn: Function): Function;
 */

exports = function(n, fn) {
    return function() {
        if (--n < 1) return fn.apply(this, arguments);
    };
};
