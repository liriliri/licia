/* Move a stand-alone function to a worker thread.
 *
 * |Name  |Type    |Desc               |
 * |------|--------|-------------------|
 * |fn    |function|Function to turn   |
 * |return|function|Workerized Function|
 */

/* example
 * var worker = workerize(function (a, b) {
 *     return a + b;
 * });
 * worker(1, 2).then(function (value) {
 *     console.log(value); // -> 3
 * });
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare function workerize(fn: Function): Function;
 */

_('Promise restArgs uniqId toSrc createUrl isStr');

exports = function(fn) {
    var promises = {};

    var src = [
        toSrc(isPromise),
        'onmessage=(',
        toSrc(function(fn) {
            return function(e) {
                var data = e.data,
                    id = data[0],
                    args = data[1],
                    value;

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

    var worker = new Worker(createUrl(src));

    worker.onmessage = function(e) {
        var data = e.data,
            id = data[0],
            err = data[1],
            value = data[2];

        if (isStr(err)) err = new Error(err);
        promises[id](err, value);
        delete promises[id];
    };

    return restArgs(function(args) {
        var id = uniqId('workerize');

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
