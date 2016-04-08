// TODO

_('isPlainObj each deepClone');

extendDeep = function (obj)
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
};