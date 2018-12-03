/* Create a function that invokes once it's called n or more times.
 *
 * |Name  |Type    |Desc                          |
 * |------|--------|------------------------------|
 * |n     |number  |Number of calls before invoked|
 * |fn    |function|Function to restrict          |
 * |return|function|New restricted function       |
 */

/* example
 * var fn = after(5, function() {
 *     // -> Only invoke after fn is called 5 times.
 * });
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function after(n: number, fn: Function): Function;
 */

exports = function(n, fn) {
    return function() {
        if (--n < 1) return fn.apply(this, arguments);
    };
};
