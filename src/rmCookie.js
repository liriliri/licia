/* Loop through all possible path and domain to remove cookie.
 *
 * |Name|Desc      |
 * |----|----------|
 * |key |Cookie key|
 */

/* example
 * rmCookie('test');
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function rmCookie(key: string): void;
 */

_('cookie');

exports = function(key) {
    const location = window.location;
    const hostname = location.hostname;
    const pathname = location.pathname;
    const hostNames = hostname.split('.');
    const pathNames = pathname.split('/');
    let domain = '';
    const pathLen = pathNames.length;
    let path;

    if (del()) return;

    for (let i = hostNames.length - 1; i >= 0; i--) {
        const hostName = hostNames[i];
        if (hostName === '') continue;
        domain = domain === '' ? hostName : hostName + '.' + domain;

        path = '/';
        if (del({ domain: domain, path: path }) || del({ domain: domain }))
            return;

        for (let j = 0; j < pathLen; j++) {
            const pathName = pathNames[j];
            if (pathName === '') continue;

            path += pathName;
            if (del({ domain: domain, path: path }) || del({ path: path }))
                return;

            path += '/';
            if (del({ domain: domain, path: path }) || del({ path: path }))
                return;
        }
    }

    function del(options) {
        options = options || {};

        cookie.remove(key, options);

        return !cookie.get(key);
    }
};
