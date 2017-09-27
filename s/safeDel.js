/* Delete object property.
 *
 * |Name  |Type        |Desc                      |
 * |------|------------|--------------------------|
 * |obj   |object      |Object to query           |
 * |path  |array string|Path of property to delete|
 * |return|*           |Deleted value or undefined|
 *
 * ```javascript
 * var obj = {a: {aa: {aaa: 1}}};
 * safeDel(obj, 'a.aa.aaa'); // -> 1
 * safeDel(obj, ['a', 'aa']); // -> {}
 * safeDel(obj, 'a.b'); // -> undefined
 * ```
 */

_('isUndef castPath');

function exports(obj, path)
{
    path = castPath(path, obj);

    var prop, ret;

    /* eslint-disable no-cond-assign */
    while (prop = path.shift())
    {
        ret = obj[prop];
        if (path.length === 0) delete obj[prop];
        obj = ret;
        if (isUndef(obj)) return;
    }

    return ret;
}