_('isStr toArr Select');

$safeNodes = function (nodes)
{
    if (isStr(nodes)) return new Select(nodes);

    return toArr(nodes);
};