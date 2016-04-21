// TODO

_('idxOf isArrLike values');

exports = function (arr, val)
{
    if (!isArrLike(arr)) arr = values(arr);

    return idxOf(arr, val) >= 0;
};