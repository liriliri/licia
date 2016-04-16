// TODO

_('indexOf isArrLike values');

exports = function (arr, val)
{
    if (!isArrLike(arr)) arr = values(arr);

    return indexOf(arr, val) >= 0;
};