/* TODO
 */

_('extendOwn isMatch');

function exports(attrs)
{
    attrs = extendOwn({}, attrs);

    return function (obj)
    {
        return isMatch(obj, attrs);
    };
}