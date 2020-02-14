/* Function currying.
 *
 * |Name  |Desc                |
 * |------|--------------------|
 * |fn    |Function to curry   |
 * |return|New curried function|
 */

/* example
 * const add = curry(function (a, b) { return a + b });
 * const add1 = add(1);
 * add1(2); // -> 3
 */

/* module
 * env: all
 */

/* typescript
 * export declare function curry(fn: Function): Function;
 */

_('toArr');

exports = function(fn) {
    const len = fn.length;

    return function curriedFn() {
        const args = toArr(arguments);

        if (args.length < len) {
            return function() {
                return curriedFn.apply(null, args.concat(toArr(arguments)));
            };
        }

        return fn.apply(null, args);
    };
};
