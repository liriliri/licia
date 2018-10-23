/* Run function in a try catch.
 * 
 * |Name|Type    |Desc                 |
 * |----|--------|---------------------|
 * |fn  |function|Function to try catch|
 * |[cb]|function|Callback             |
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
 * test: all
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
