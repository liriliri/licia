// TODO

_('safeCb each');

filter = function (obj, predicate, ctx)
{
    var ret = [];

    predicate = safeCb(predicate, ctx);

    each(obj, function (val, idx, list)
    {
        if (predicate(val, idx, list)) ret.push(val);
    });

    return ret;
};