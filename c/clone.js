/* TODO
 */

_('isObj isArr extend');

exports = function (obj)
{
    if (!isObj(obj)) return obj;

    return isArr(obj) ? obj.slice() : extend({}, obj);
};