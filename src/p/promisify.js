/* Convert callback based functions into Promises.
 *
 * |Name           |Desc                                  |
 * |---------------|--------------------------------------|
 * |fn             |Callback based function               |
 * |multiArgs=false|If callback has multiple success value|
 * |return         |Result function                       |
 *
 * If multiArgs is set to true, the resulting promise will always fulfill with an array of the callback's success values.
 */

/* example
 * const fs = require('fs');
 *
 * const readFile = promisify(fs.readFile);
 * readFile('test.js', 'utf-8').then(function (data) {
 *     // Do something with file content.
 * });
 */

/* module
 * env: all
 */

/* typescript
 * export declare function promisify(fn: types.AnyFn, multiArgs?: boolean): types.AnyFn;
 */

_('restArgs root Promise types');

exports = function(fn, multiArgs) {
    return restArgs(function(args) {
        return new exports.Promise(function(resolve, reject) {
            args.push(
                restArgs(function callback(err, values) {
                    if (err) return reject(err);

                    if (!multiArgs) return resolve(values[0]);

                    resolve(values);
                })
            );

            fn.apply(this, args);
        });
    });
};

exports.Promise = root.Promise || Promise;
