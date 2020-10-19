/* Use storage safely in safari private browsing and older browsers.
 *
 * |Name        |Desc             |
 * |------------|-----------------|
 * |type='local'|local or session |
 * |return      |Specified storage|
 */

/* example
 * const localStorage = safeStorage('local');
 * localStorage.setItem('licia', 'util');
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function safeStorage(type?: string): typeof window.localStorage;
 */

_('memStorage');

exports = function(type) {
    type = type || 'local';

    let ret;

    switch (type) {
        case 'local':
            ret = window.localStorage;
            break;
        case 'session':
            ret = window.sessionStorage;
            break;
    }

    try {
        // Safari private browsing
        const x = 'test-localStorage-' + Date.now();
        ret.setItem(x, x);
        const y = ret.getItem(x);
        ret.removeItem(x);
        if (y !== x) throw new Error();
    } catch (e) {
        return memStorage;
    }

    return ret;
};
