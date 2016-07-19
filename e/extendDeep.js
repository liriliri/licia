// TODO

_('isPlainObj each cloneDeep');

function exports(obj)
{
    var i   = 0,
        ret = obj,
        len = arguments.length;

    while (++i < len)
    {
        obj = arguments[i];

        if (isPlainObj(ret) && isPlainObj(obj))
        {
            each(obj, function (val, key)
            {
                ret[key] = extendDeep(ret[key], obj[key]);
            });
        } else
        {
            ret = cloneDeep(obj);
        }
    }

    return ret;
}