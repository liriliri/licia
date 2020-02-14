/* Run an array of functions in series.
 *
 * |Name |Desc                   |
 * |-----|-----------------------|
 * |tasks|Array of functions     |
 * |cb   |Callback once completed|
 */

/* example
 * waterfall([
 *     function (cb) {
 *         cb(null, 'one');
 *     },
 *     function (arg1, cb) {
 *         // arg1 -> 'one'
 *         cb(null, 'done');
 *     }
 * ], function (err, result) {
 *     // result -> 'done'
 * });
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function waterfall(tasks: Function[], cb?: Function): void;
 */

_('noop nextTick restArgs');

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
