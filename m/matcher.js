// TODO

_('extendOwn isMatch');

exports = function (attrs)
{
    attrs = extendOwn({}, attrs);

    return function (obj)
    {
        return isMatch(obj, attrs);
    };
};