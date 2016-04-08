_('isUndef');

_createAssigner = function (keysFunc, defaults)
{
    return function (obj)
    {
        var len = arguments.length;

        if (defaults) obj = Object(obj);

        if (len < 2 || obj == null) return obj;

        for (var i = 1; i < len; i++)
        {
            var src     = arguments[i],
                keys    = keysFunc(src),
                keysLen = keys.length;

            for (var j = 0; j < keysLen; j++)
            {
                var key = keys[j];
                if (!defaults || isUndef(obj[key])) obj[key] = src[key];
            }
        }

        return obj;
    };
};