// TODO

var arrProto = Array.prototype;

slice = function (arr, start, end)
{
    return arrProto.slice.call(arr, start, end);
};