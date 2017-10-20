/* Gets the number of milliseconds that have elapsed since the Unix epoch.
 *
 * ```javascript
 * now(); // -> 1468826678701
 * ```
 */

/* module
 * env: all
 * test: all
 */

exports = Date.now || function ()
{
    return new Date().getTime();
};