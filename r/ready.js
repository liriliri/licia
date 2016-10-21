/* Invoke callback when dom is ready, similar to jQuery ready.
 *
 * |Name|Type    |Desc             |
 * |----|--------|-----------------|
 * |fn  |function|Callback function|
 *
 * ```javascript
 * ready(function ()
 * {
 *     // It's safe to manipulate dom here.
 * });
 * ```
 */

var fns = [],
    listener,
    doc = document,
    hack = doc.documentElement.doScroll,
    domContentLoaded = 'DOMContentLoaded',
    loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);

if (!loaded)
{
    doc.addEventListener(domContentLoaded, listener = function ()
    {
        doc.removeEventListener(domContentLoaded, listener);
        loaded = 1;
        while (listener = fns.shift()) listener();
    });
}

function exports(fn)
{
    loaded ? setTimeout(fn, 0) : fns.push(fn)
}