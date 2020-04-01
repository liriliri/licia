/* Partially apply a function by filling in given arguments.
 *
 * |Name       |Desc                                    |
 * |-----------|----------------------------------------|
 * |fn         |Function to partially apply arguments to|
 * |...partials|Arguments to be partially applied       |
 * |return     |New partially applied function          |
 */

/* example
 * const sub5 = partial(function (a, b) { return b - a }, 5);
 * sub5(20); // -> 15
 */

/* module
 * env: all
 */

/* typescript
 * export declare function partial(
 *     fn: types.AnyFn,
 *     ...partials: any[]
 * ): types.AnyFn;
 */

_('restArgs toArr types');

exports = restArgs(function(fn, partials) {
    return function() {
        let args = [];

        args = args.concat(partials);
        args = args.concat(toArr(arguments));

        return fn.apply(this, args);
    };
});
