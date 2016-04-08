// TODO

_('keys');

isMatch = function (obj, attrs)
{
    var _keys = keys(attrs),
        len   = _keys.length;

    if (obj == null) return !len;

    obj = Object(obj);

    for (var i = 0; i < len; i++)
    {
        var key = keys[i];
        if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }

    return true;
};