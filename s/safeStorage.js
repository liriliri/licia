/* Use storage safely in safari private browsing and older browsers.
 * 
 * |Name          |Type  |Desc             |
 * |--------------|------|-----------------|
 * |[type='local']|string|local or session | 
 * |return        |object|Specified storage|
 * 
 * ```javascript
 * var localStorage = safeStorage('local');
 * localStorage.setItem('eris', 'util');
 * ```
 */

_('memStorage');

function exports(type)
{
    type = type || 'local';

    var ret;

    switch (type)
    {
        case 'local': ret = window.localStorage; break;
        case 'session':  ret = window.sessionStorage; break;
    }

    try
    {
        // Safari private browsing
        var x = 'test-localStorage-' + Date.now();
        ret.setItem(x, x);
        var y = ret.getItem(x);
        ret.removeItem(x);
        if (y !== x) throw new Error();
    } catch (e)
    {
        return memStorage;
    }

    return ret;
}