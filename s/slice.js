/* TODO
 */

var arrProto = Array.prototype;

exports = function (arr, start, end)
{
    return arrProto.slice.call(arr, start, end);
};