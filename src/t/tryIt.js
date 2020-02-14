/* Run function in a try catch.
 *
 * |Name|Desc                 |
 * |----|---------------------|
 * |fn  |Function to try catch|
 * |cb  |Callback             |
 */

/* example
 * tryIt(function () {
 *     // Do something that might cause an error.
 * }, function (err, result) {
 *     if (err) console.log(err);
 * });
 */

/* module
 * env: all
 */

/* typescript
 * export declare function tryIt(fn: Function, cb?: Function): void;
 */

_('noop');

exports = function(fn, cb) {
    cb = cb || noop;

    try {
        cb(null, fn());
    } catch (e) {
        cb(e);
        return;
    }
};
