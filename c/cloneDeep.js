/* Recursively clone value.
 *
 * |Name  |Type|Desc             |
 * |------|----|-----------------|
 * |val   |*   |Value to clone   |
 * |return|*   |Deep cloned Value|
 *
 * ```javascript
 * var obj = [{a: 1}, {a: 2}];
 * var obj2 = cloneDeep(obj);
 * console.log(obj[0] === obj2[1]); // -> false
 * ```
 */

_('keys isObj isFn isArr each');

function mapObject(obj, iteratee)
{
    var newObj = {};

    each(obj, function (val, key)
    {
        var pair = iteratee(key, val);

        newObj[pair[0]] = pair[1];
    });

    return newObj;
}

function exports(obj)
{
    if (isArr(obj))
    {
        return obj.map(function (val)
        {
            return cloneDeep(val);
        });
    }

    if (isObj(obj) && !isFn(obj))
    {
        return mapObject(obj, function (key, val)
        {
            return [key, cloneDeep(val)];
        });
    }

    return obj;
}