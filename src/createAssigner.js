/* Used to create extend, extendOwn and defaults.
 *
 * |Name    |Desc                          |
 * |--------|------------------------------|
 * |keysFn  |Function to get object keys   |
 * |defaults|No override when set to true  |
 * |return  |Result function, extend...    |
 */

/* module
 * env: all
 */

/* typescript
 * export declare function createAssigner(
 *     keysFn: types.AnyFn,
 *     defaults: boolean
 * ): types.AnyFn;
 */

_('isUndef each types');

exports = function(keysFn, defaults) {
    return function(obj) {
        each(arguments, function(src, idx) {
            if (idx === 0) return;

            const keys = keysFn(src);

            each(keys, function(key) {
                if (!defaults || isUndef(obj[key])) obj[key] = src[key];
            });
        });

        return obj;
    };
};
