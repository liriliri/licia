_('isArrLike isStr map isArr');

exports = function (obj)
{
    if (isArr(obj)) return obj;

    return isArrLike(obj) && !isStr(obj)
           ? map(obj, function (val) { return val })
           : [obj];
};