/* Handle errors like golang.
 *
 * |Name  |Type    |Desc                                      |
 * |------|--------|------------------------------------------|
 * |fn    |function|Function that returns a Promise           |
 * |return|function|Like fn, but resolves with [result, error]|
 *
 * |Name  |Type   |Desc                                      |
 * |------|-------|------------------------------------------|
 * |p     |Promise|Promise to transform                      |
 * |return|Promise|Promise that resolves with [result, error]|
 */

/* example
 * ;(async () => {
 *     let fn = golangify(async () => {
 *         throw Error('err')
 *     });
 *     await fn(); // -> [undefined, Error]
 *     fn = golangify(async num => num * 2);
 *     await fn(2); // -> [4, null]
 *
 *     await golangify(Promise.reject(Error('err'))); // -> [undefined, Error]
 *     await golangify(Promise.resolve(4)); // -> [4, null]
 * })();
 */

/* module
 * env: all
 * test: all
 * since: 1.5.4
 */

/* typescript
 * export declare function golangify<T, U = Error>(
 *     fn: (...args: any[]) => Promise<T>
 * ): (...args: any[]) => Promise<[T | undefined, U | null]>;
 * export declare function golangify<T, U = Error>(
 *     p: Promise<T>
 * ): Promise<[T | undefined, U | null]>;
 */

_('isFn restArgs');

exports = function(fn) {
    if (isFn(fn)) {
        return restArgs(function(args) {
            return fn
                .apply(this, args)
                .then(v => [v, null])
                .catch(err => [void 0, err]);
        });
    } else {
        return fn.then(v => [v, null]).catch(err => [void 0, err]);
    }
};
