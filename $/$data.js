_('$attr isStr isObj each');

$data = function (nodes, name, val)
{
    var dataName = name;

    if (isStr(name)) dataName = 'data-' + name;
    if (isObj(name))
    {
        dataName = {};
        each(name, function (val, key)
        {
            dataName['data-' + key] = val;
        });
    }

    return $attr(nodes, dataName, val);
};