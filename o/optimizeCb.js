_('isUndef');

exports = function (func, ctx, argCount)
{
    if (isUndef(ctx)) return func;

    switch (argCount == null ? 3 : argCount)
    {
        case 1: return function (val)
        {
            return func.call(ctx, val);
        };
        case 3: return function (val, idx, collection)
        {
            return func.call(ctx, val, idx, collection);
        };
        case 4: return function (accumulator, val, idx, collection)
        {
            return func.call(ctx, accumulator, val, idx, collection);
        }
    }

    return function ()
    {
        return func.apply(ctx, arguments);
    };
};