/* Retrieve all the names of object's own and inherited properties.
 *
 * |Name|Type|Desc|
 * |--------------|
 * |object|object|The object to query|
 * |return|array|The array of all property names|
 *
 * ```javascript
 * var obj = Object.create({ a: 0 });
 * obj.b = 1;
 * allKeys(obj) // -> ['a', 'b']
 * ```
 *
 * > Members of Object's prototype won't be retrieved.
 */

allKeys = function (obj)
{
    var ret = [], key;

    for (key in obj) ret.push(key);

    return ret;
};