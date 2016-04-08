_('filter');

function isEqual(a, b) { return a === b }

unique = function (arr, compare)
{
    compare = compare || isEqual;

    return filter(arr, function (item, idx, arr)
    {
        var len = arr.length;

        while (++idx < len)
        {
            if (compare(item, arr[idx])) return false;
        }

        return true;
    });
};