/* Run an array of functions in series.
 *
 * |Name |Desc                   |
 * |-----|-----------------------|
 * |tasks|Array of functions     |
 * |cb   |Callback once completed|
 */

/* example
 * waterfall(
 *     [
 *         function(cb) {
 *             cb(null, 'one');
 *         },
 *         function(arg1, cb) {
 *             // arg1 -> 'one'
 *             cb(null, 'done');
 *         }
 *     ],
 *     function(err, result) {
 *         // result -> 'done'
 *     }
 * );
 */

/* module
 * env: all
 */

/* typescript
 * export declare function waterfall(tasks: types.AnyFn[], cb?: types.AnyFn): void;
 */

_('noop nextTick restArgs types');

exports = function(tasks, cb) {
    cb = cb || noop;

    let current = 0;

    const taskCb = restArgs(function(err, args) {
        if (++current >= tasks.length || err) {
            args.unshift(err);
            nextTick(function() {
                cb.apply(null, args);
            });
        } else {
            args.push(taskCb);
            tasks[current].apply(null, args);
        }
    });

    if (tasks.length) {
        tasks[0](taskCb);
    } else {
        nextTick(function() {
            cb();
        });
    }
};
