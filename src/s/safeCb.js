/* Create callback based on input value.
 */

/* module
 * env: all
 */

/* typescript
 * export declare function safeCb(
 *     val?: any,
 *     ctx?: any,
 *     argCount?: number
 * ): types.AnyFn;
 */

_('isFn isObj isArr optimizeCb matcher identity types property');

exports = function(val, ctx, argCount) {
    if (val == null) return identity;

    if (isFn(val)) return optimizeCb(val, ctx, argCount);

    if (isObj(val) && !isArr(val)) return matcher(val);

    return property(val);
};
