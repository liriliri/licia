/* Return a function that will itself return the key property of any passed-in object.
 *
 * |Name  |Type        |Desc                       |
 * |------|------------|---------------------------|
 * |path  |string array|Path of the property to get|
 * |return|function    |New accessor function      |
 *
 * ```javascript
 * var obj = {a: {b: 1}};
 * property('a')(obj); // -> {b: 1}
 * property(['a', 'b'])(obj); // -> 1
 * ```
 */

_('isArr');

function exports(path)
{
    if (!isArr(path)) return shallowProperty(path);

    return function(obj)
    {
        return deepGet(obj, path);
    };
}

function shallowProperty(key)
{
    return function(obj)
    {
        return obj == null ? void 0 : obj[key];
    };
}

function deepGet(obj, path)
{
    var len = path.length;

    for (var i = 0; i < len; i++)
    {
        if (obj == null) return void 0;
        obj = obj[path[i]];
    }

    return len ? obj : void 0;
}