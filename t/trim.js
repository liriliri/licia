// TODO

_('ltrim rtrim');

var regSpace = /^\s+|\s+$/g;

trim = function (str, chars)
{
    if (chars == null) return str.replace(regSpace, '');

    return ltrim(rtrim(str, chars), chars);
};