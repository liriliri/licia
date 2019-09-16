/* Use generator like async/await.
 *
 * |Name  |Type             |Desc              |
 * |------|-----------------|------------------|
 * |fn    |GeneratorFunction|Generator function|
 * |return|function         |Result function   |
 */

/* example
 * const sleep = require('licia/sleep');
 *
 * const fn = toAsync(function *() {
 *     yield sleep(200);
 *     return 'licia';
 * });
 *
 * fn().then(str => {});
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function toAsync(fn: Function): Function;
 */

_('toArr isGeneratorFn isPromise toStr');

// https://github.com/tj/co
exports = function(fn) {
    if (!isGeneratorFn(fn)) {
        throw new TypeError('Expected a generator function');
    }

    return function() {
        const args = toArr(arguments);

        return new Promise((resolve, reject) => {
            const generator = fn.apply(this, args);

            function onFulfilled(res) {
                let ret;
                try {
                    ret = generator.next(res);
                } catch (e) {
                    return reject(e);
                }

                next(ret);

                return null;
            }

            function onRejected(err) {
                let ret;
                try {
                    ret = generator.throw(err);
                } catch (e) {
                    return reject(e);
                }

                next(ret);
            }

            function next(ret) {
                if (ret.done) return resolve(ret.value);
                if (isPromise(ret.value)) {
                    return ret.value.then(onFulfilled, onRejected);
                }
                return onRejected(
                    new TypeError(
                        `You may only yield a promise, ${toStr(
                            ret.value
                        )} is passed`
                    )
                );
            }

            onFulfilled();
        });
    };
};
