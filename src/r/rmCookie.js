/* Loop through all possible path and domain to remove cookie.
 *
 * |Name|Type  |Desc      |
 * |----|------|----------|
 * |key |string|Cookie key|
 */

/* example
 * rmCookie('test');
 */

/* module
 * env: browser
 * test: browser
 */

_('cookie');

function exports(key) {
    var location = window.location,
        hostname = location.hostname,
        pathname = location.pathname,
        hostNames = hostname.split('.'),
        pathNames = pathname.split('/'),
        domain = '',
        pathLen = pathNames.length,
        path;

    if (del()) return;

    for (var i = hostNames.length - 1; i >= 0; i--) {
        var hostName = hostNames[i];
        if (hostName === '') continue;
        domain = domain === '' ? hostName : hostName + '.' + domain;

        path = '/';
        if (del({ domain: domain, path: path }) || del({ domain: domain }))
            return;

        for (var j = 0; j < pathLen; j++) {
            var pathName = pathNames[j];
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
}
