/* Create an array of the own enumerable property names of object.
 *
 * |Name  |Type  |Desc                       |
 * |-----------------------------------------|
 * |obj   |object|The object to query        |
 * |return|array |The array of property names|
 */

_('has');

exports = Object.keys || function (obj)
{
    var ret = [], key;

    for (key in obj)
    {
        if (has(obj, key)) ret.push(key);
    }

    return ret;
};