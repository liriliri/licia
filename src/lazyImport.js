/* Import modules lazily, Proxy is used.
 */

/* example
 * const r = lazyImport(require);
 *
 * const _ = r('underscore');
 *
 * _.isNumber(5);
 */

/* module
 * env: node
 */

/* typescript
 * export declare function lazyImport<T>(
 *     importFn: (moduleId: string) => T,
 *     dirname?: string
 * ): (moduleId: string) => T;
 */

_('stackTrace splitPath startWith');

const path = require('path');

exports = function(importFn, dirname) {
    return function(moduleId) {
        if (isRelative(moduleId)) {
            if (!dirname) {
                const stack = stackTrace();
                const fileName = stack[1].getFileName();
                dirname = splitPath(fileName).dir;
            }
            moduleId = path.join(dirname, moduleId);
        }
        return proxyExports(importFn, moduleId);
    };
};

function proxyExports(importFn, moduleId) {
    const fakeExports = {};
    let cache;

    function doImport() {
        if (cache) {
            return;
        }
        cache = importFn(moduleId);
    }

    return new Proxy(fakeExports, {
        get(target, property) {
            doImport();

            return cache[property];
        }
    });
}

function isRelative(moduleId) {
    return startWith(moduleId, './') || startWith(moduleId, '../');
}
