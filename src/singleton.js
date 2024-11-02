/* Ensure an async function is only called once before it resolves.
 *
 * |Name  |Desc                        |
 * |------|----------------------------|
 * |fn    |Function to restrict        |
 * |hashFn|Function to create cache key|
 * |return|New restricted function     |
 */

/* example
 * const fetch = singleton(async function fetch(id) {});
 * const f1 = fetch(1);
 * const f2 = fetch(1);
 * const f3 = fetch(2);
 * console.log(f1 === f2); // -> true
 * console.log(f1 === f3); // -> false
 *
 * f1.then(() => {
 *     const f4 = fetch(1);
 *     console.log(f1 === f4); // -> false
 * });
 */

/* module
 * env: all
 * since: 1.44.0
 */

/* typescript
 * export declare function singleton<F extends types.Fn<Promise<any>>>(
 *     fn: F,
 *     hashFn?: types.AnyFn
 * ): F;
 */

_('types has');

exports = function(fn, hashFn = JSON.stringify) {
    const singleton = function() {
        const cache = singleton.cache;
        const address = hashFn.apply(this, arguments);

        if (has(cache, address)) {
            return cache[address];
        }

        const promise = fn.apply(this, arguments).finally(() => {
            delete cache[address];
        });
        cache[address] = promise;

        return promise;
    };

    singleton.cache = {};

    return singleton;
};
