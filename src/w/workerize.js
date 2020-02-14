/* Move a stand-alone function to a worker thread.
 *
 * |Name  |Desc               |
 * |------|-------------------|
 * |fn    |Function to turn   |
 * |return|Workerized Function|
 */

/* example
 * const worker = workerize(function (a, b) {
 *     return a + b;
 * });
 * worker(1, 2).then(function (value) {
 *     console.log(value); // -> 3
 * });
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function workerize(fn: Function): Function;
 */

_('Promise restArgs uniqId toSrc createUrl isStr');

exports = function(fn) {
    const promises = {};

    const src = [
        toSrc(isPromise),
        'onmessage=(',
        toSrc(function(fn) {
            return function(e) {
                const data = e.data;
                const id = data[0];
                const args = data[1];
                let value;

                try {
                    value = fn.apply(fn, args);
                    if (isPromise(value)) {
                        value.then(
                            function(value) {
                                postMessage([id, null, value]);
                            },
                            function(err) {
                                postMessage([id, err.message]);
                            }
                        );
                    } else {
                        postMessage([id, null, value]);
                    }
                } catch (e) {
                    postMessage([id, e.message]);
                }
            };
        }),
        ')(' + toSrc(fn) + ')'
    ].join('\n');

    const worker = new Worker(createUrl(src));

    worker.onmessage = function(e) {
        const data = e.data;
        const id = data[0];
        let err = data[1];
        const value = data[2];

        if (isStr(err)) err = new Error(err);
        promises[id](err, value);
        delete promises[id];
    };

    return restArgs(function(args) {
        const id = uniqId('workerize');

        return new Promise(function(resolve, reject) {
            promises[id] = function(err, value) {
                if (err) return reject(err);

                resolve(value);
            };

            worker.postMessage([id, args]);
        });
    });
};

function isPromise(val) {
    return (
        !!val &&
        (typeof val === 'object' || typeof val === 'function') &&
        typeof val.then === 'function'
    );
}
