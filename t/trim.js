// TODO

_('ltrim rtrim');

var regSpace = /^\s+|\s+$/g;

exports = function (str, chars)
{
    if (chars == null) return str.replace(regSpace, '');

    return ltrim(rtrim(str, chars), chars);
};