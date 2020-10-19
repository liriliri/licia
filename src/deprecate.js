/* Node.js util.deprecate with browser support.
 *
 * |Name  |Desc                     |
 * |------|-------------------------|
 * |fn    |Function to be deprecated|
 * |msg   |Warning message          |
 * |return|Deprecated function      |
 */

/* example
 * const fn = () => {};
 * const obsoleteFn = deprecate(fn, 'obsoleteFn is deprecated.');
 * obsoleteFn();
 */

/* module
 * env: all
 * since: 1.5.0
 */

/* typescript
 * export declare function deprecate(fn: types.AnyFn, msg: string): types.AnyFn;
 */

_('isNode root memStorage types');

if (isNode) {
    exports = eval('require')('util').deprecate;
} else {
    const localStorage = root.localStorage || memStorage;

    exports = function(fn, msg) {
        if (localStorage.getItem('noDeprecation')) {
            return fn;
        }

        let warned = false;
        function deprecated(...args) {
            if (!warned) {
                warned = true;
                /* eslint-disable no-console */
                console.warn(msg);
            }

            return fn.apply(this, args);
        }

        Object.setPrototypeOf(deprecated, fn);
        if (fn.prototype) {
            deprecated.prototype = fn.prototype;
        }

        return deprecated;
    };
}
