_('isStr toArr Select');

exports = function (nodes)
{
    if (isStr(nodes)) return new Select(nodes);

    return toArr(nodes);
};