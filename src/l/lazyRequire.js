/* Require modules lazily.
 */

/* example
 * var r = lazyRequire(require);
 * 
 * var _ = r('underscore');
 * 
 * // underscore is required only when _ is called.
 * _().isNumber(5);
 */

/* module
 * env: node
 * test: node
 */

/* typescript
 * export declare function lazyRequire(requireFn: Function): Function;
 */

exports = function(requireFn) {
    var cache = {};

    return function(name) {
        return function() {
            return cache[name] || (cache[name] = requireFn(name));
        };
    };
};
