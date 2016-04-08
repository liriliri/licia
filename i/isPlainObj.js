// TODO

_('isObj isArr');

isPlainObj = function (obj)
{
    return isObj(obj) && !isArr(obj);
};