/* Run an array of functions in parallel.
 *
 * |Name |Desc                   |
 * |-----|-----------------------|
 * |tasks|Array of functions     |
 * |cb   |Callback once completed|
 */

/* example
 * parallel(
 *     [
 *         function(cb) {
 *             setTimeout(function() {
 *                 cb(null, 'one');
 *             }, 200);
 *         },
 *         function(cb) {
 *             setTimeout(function() {
 *                 cb(null, 'two');
 *             }, 100);
 *         }
 *     ],
 *     function(err, results) {
 *         // results -> ['one', 'two']
 *     }
 * );
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function parallel(tasks: types.AnyFn[], cb?: types.AnyFn): void;
 */

_('noop each nextTick types');

exports = function(tasks, cb) {
    cb = cb || noop;

    const results = [];
    let pending = tasks.length;

    if (!pending) return done(null);

    each(tasks, function(task, i) {
        task(function(err, result) {
            taskCb(i, err, result);
        });
    });

    function taskCb(i, err, result) {
        results[i] = result;
        if (--pending === 0 || err) done(err);
    }

    function done(err) {
        nextTick(function() {
            cb(err, results);
            cb = noop;
        });
    }
};
