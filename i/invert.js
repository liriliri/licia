/* Creates an object composed of the inverted keys and values of object.
 *
 * |Name  |Type  |Desc                           |
 * |---------------------------------------------|
 * |obj   |object|The object to invert           |
 * |return|object|Returns the new inverted object|
 *
 * If object contains duplicate values, subsequent values overwrite property
 * assignments of previous values unless multiValue is true.
 */

_('keys each');

exports = function (obj)
{
    var ret = {};

    each(obj, function (val, key) { ret[val] = key });

    return ret;
};