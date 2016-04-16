// TODO

_('safeCb isArrLike keys');

exports = function (obj, predicate, ctx)
{
    predicate = safeCb(predicate, ctx);

    var _keys = !isArrLike(obj) && keys(obj),
        len   = (_keys || obj).length;

    for (var i = 0; i < len; i++)
    {
        var key = _keys ? _keys[i] : i;
        if (predicate(obj[key], key, obj)) return true;
    }

    return false;
};