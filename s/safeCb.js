/* Create callback based on input value.
 */

/* module
 * env: all
 * test: all
 */

_('isFn isObj optimizeCb matcher identity');

exports = function (val, ctx, argCount)
{
    if (val == null) return identity;

    if (isFn(val)) return optimizeCb(val, ctx, argCount);

    if (isObj(val)) return matcher(val);

    return function (key)
    {
        return function (obj)
        {
            return obj == null ? undefined : obj[key];
        }
    };
};