/* Memoize a given function by caching the computed result.
 *
 * |Name    |Type    |Desc                                |
 * |--------|--------|------------------------------------|
 * |fn      |function|Function to have its output memoized|
 * |[hashFn]|function|Function to create cache key        |
 * |return  |function|New memoized function               |
 */

/* example
 * const fibonacci = memoize(function(n) {
 *     return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
 * });
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function memoize(fn: Function, hashFn?: Function): Function;
 */

_('has');

exports = function(fn, hashFn) {
    const memoize = function(key) {
        const cache = memoize.cache;
        const address = '' + (hashFn ? hashFn.apply(this, arguments) : key);

        if (!has(cache, address)) cache[address] = fn.apply(this, arguments);

        return cache[address];
    };

    memoize.cache = {};

    return memoize;
};
