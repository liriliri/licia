/* Make an async function support both promises and callbacks.
 *
 * |Name  |Desc                            |
 * |------|--------------------------------|
 * |fn    |Async function                  |
 * |type  |Source type, promise or callback|
 * |return|Result function                 |
 */

/* example
 * function callbackFn(str, cb) {
 *     setTimeout(() => {
 *         cb(null, str);
 *     }, 10);
 * }
 *
 * const fn = universalify(callbackFn, 'callback');
 * fn('licia', (err, result) => {
 *     console.log(result); // -> 'licia'
 * });
 * fn('licia').then(result => {
 *     console.log(result); // -> 'licia'
 * });
 */

/* module
 * env: all
 * since: 1.7.0
 */

/* typescript
 * export declare function universalify(
 *     fn: types.AnyFn,
 *     type: string
 * ): types.AnyFn;
 */

_('promisify callbackify last isFn types');

exports = function(fn, type) {
    let callbackFn;
    let promiseFn;
    if (type === 'callback') {
        callbackFn = fn;
        promiseFn = promisify(fn);
    } else {
        promiseFn = fn;
        callbackFn = callbackify(fn);
    }

    return function(...args) {
        if (isFn(last(args))) {
            callbackFn.apply(this, args);
        } else {
            return promiseFn.apply(this, args);
        }
    };
};
