/* Convert an object into a list of [key, value] pairs.
 *
 * |Name  |Type  |Desc                      |
 * |------|------|--------------------------|
 * |obj   |object|Object to convert         |
 * |return|array |List of [key, value] pairs|
 *
 * ```javascript
 * pairs({a: 1, b: 2}); // -> [['a', 1], ['b', 2]]
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('keys');

function exports(obj)
{
    var _keys = _.keys(obj),
        len = _keys.length,
        ret = Array(len);

    for (var i = 0; i < len; i++)
    {
        ret[i] = [_keys[i], obj[_keys[i]]];
    }

    return ret;
}