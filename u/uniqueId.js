// TODO

var idCounter = 0;

uniqueId = function (prefix)
{
    var id = ++idCounter + '';

    return prefix ? prefix + id : id;
};