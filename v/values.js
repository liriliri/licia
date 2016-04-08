/* function
 * values: Creates an array of the own enumerable property values of object.
 * object(object): The object to query.
 * return(array): The array of property values.
 *
 * ```javascript
 * values({one: 1, two: 2}); // -> [1, 2]
 * ```
 */

_('each');

values = function (obj)
{
    var ret = [];

    each(obj, function (val) { ret.push(val) });

    return ret;
};