/* Run an array of functions in parallel.
 *
 * |Name |Type    |Desc                   |
 * |-----|--------|-----------------------|
 * |tasks|array   |Array of functions     |
 * |[cb] |function|Callback once completed|
 *
 * ```javascript
 * parallel([
 *     function(cb)
 *     {
 *         setTimeout(function () { cb(null, 'one') }, 200);
 *     },
 *     function(cb)
 *     {
 *         setTimeout(function () { cb(null, 'two') }, 100);
 *     }
 * ], function (err, results)
 * {
 *     // results -> ['one', 'two']
 * });
 * ```
 */

_('noop each nextTick');

function exports(tasks, cb)
{
    cb = cb || noop;

    var results = [],
        pending = tasks.length;

    if (!pending) return done(null);

    each(tasks, function (task, i)
    {
        task(function (err, result) { taskCb(i, err, result) });
    });

    function taskCb(i, err, result)
    {
        results[i] = result;
        if (--pending === 0 || err) done(err);
    }

    function done(err)
    {
        nextTick(function ()
        {
            cb(err, results);
            cb = noop;
        });
    }
}