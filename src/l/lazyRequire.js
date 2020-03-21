/* Require modules lazily.
 */

/* example
 * const r = lazyRequire(require);
 *
 * const _ = r('underscore');
 *
 * // underscore is required only when _ is called.
 * _().isNumber(5);
 */

/* module
 * env: node
 * test: node
 */

/* typescript
 * export declare function lazyRequire(requireFn: types.AnyFn): types.AnyFn;
 */

_('types');

exports = function(requireFn) {
    const cache = {};

    return function(name) {
        return function() {
            return cache[name] || (cache[name] = requireFn(name));
        };
    };
};
