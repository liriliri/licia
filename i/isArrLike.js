// TODO

_('isNum has');

var MAX_ARR_IDX = Math.pow(2, 53) - 1;

exports = function (val)
{
    if (!has(val, 'length')) return false;

    var len = val.length;

    return isNum(len) && len >= 0 && len <= MAX_ARR_IDX;
};