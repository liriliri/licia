// TODO

_('extendOwn isMatch');

matcher = function (attrs)
{
    attrs = extendOwn({}, attrs);

    return function (obj)
    {
        return isMatch(obj, attrs);
    };
};