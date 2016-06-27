/* Creates an array of the own enumerable property values of object.
 *
 * |Name  |Type  |Desc                    |
 * |------|------|------------------------|
 * |obj   |object|Object to query         |
 * |return|array |Array of property values|
 *
 * ```javascript
 * values({one: 1, two: 2}); // -> [1, 2]
 * ```
 */

_('each');

exports = function (obj)
{
    var ret = [];

    each(obj, function (val) { ret.push(val) });

    return ret;
};