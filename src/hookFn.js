/* Monitor, change function arguments and result.
 *
 * |Name   |Desc            |
 * |-------|----------------|
 * |fn     |Function to hook|
 * |options|Hook options    |
 * |return |Hooked function |
 *
 * Available options:
 *
 * |Name  |Desc             |
 * |------|-----------------|
 * |before|Arguments handler|
 * |after |Result handler   |
 * |error |Error handler    |
 */

/* example
 * let sum = function(a, b) {
 *     if (a > 100) {
 *         throw Error('a is bigger than 100');
 *     }
 *     return a + b;
 * };
 * let totalSum = 0;
 * sum = hookFn(sum, {
 *     before(a, b) {
 *         return [+a, +b];
 *     },
 *     after(result) {
 *         totalSum += result;
 *         return totalSum;
 *     },
 *     error() {
 *         return totalSum;
 *     }
 * });
 * sum('2', '5'); // -> 7
 */

/* module
 * env: all
 */

/* typescript
 * export declare function hookFn<T>(
 *     fn: T,
 *     options: {
 *         before?: types.AnyFn;
 *         after?: types.AnyFn;
 *         error?: types.AnyFn;
 *     }
 * ): T;
 */

_('noop defaults toArr isArr isErr types');

exports = function(fn, options) {
    defaults(options, defOptions);

    return function() {
        let args = toArr(arguments);
        const newArgs = options.before.apply(this, args);
        if (isArr(newArgs)) {
            args = newArgs;
        }
        try {
            let result = fn.apply(this, args);
            const newResult = options.after.call(this, result);
            if (newResult) {
                result = newResult;
            }
            return result;
        } catch (e) {
            const newErr = options.error(e);
            if (newErr) {
                if (isErr(newErr)) {
                    throw newErr;
                } else {
                    return newErr;
                }
            }
            throw e;
        }
    };
};

const defOptions = {
    before: noop,
    after: noop,
    error: noop
};
