/* Set value at path of object.
 *
 * If a portion of path doesn't exist, it's created.
 *
 * |Name|Type        |Desc                   |
 * |----|------------|-----------------------|
 * |obj |object      |Object to modify       |
 * |path|array string|Path of property to set|
 * |val |*           |Value to set           |
 *
 * ```javascript
 * var obj = {};
 * safeSet(obj, 'a.aa.aaa', 1); // obj = {a: {aa: {aaa: 1}}}
 * safeSet(obj, ['a', 'aa'], 2); // obj = {a: {aa: 2}}
 * safeSet(obj, 'a.b', 3); // obj = {a: {aa: 2, b: 3}}
 * ```
 */

_('castPath');

function exports(obj, path, val)
{
    path = castPath(path, obj);

    var lastProp = path.pop(),
        prop;

    /* eslint-disable no-cond-assign */
    while (prop = path.shift())
    {
        if (!obj[prop]) obj[prop] = {};
        obj = obj[prop];
    }

    obj[lastProp] = val;
}