/* Run function in a try catch.
 * 
 * |Name|Type    |Desc                 |
 * |----|--------|---------------------|
 * |fn  |function|Function to try catch|
 * |[cb]|function|Callback             |
 * 
 * ```javascript
 * tryIt(function () 
 * {
 *     // Do something that might cause an error.
 * }, function (err, result) 
 * {
 *     if (err) console.log(err);
 * });
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('noop'); 

function exports(fn, cb) 
{
    cb = cb || noop;

    try 
    {
        cb(null, fn());
    } catch(e) 
    {
        cb(e);
        return;
    }
} 