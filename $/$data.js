/* Data manipulation TODO
 *
 * ```javascript
 * $data('#test', 'attr1', 'eustia');
 * ```
 */

_('$attr isStr isObj each');

function exports(nodes, name, val)
{
    var dataName = name;

    if (isStr(name)) dataName = 'data-' + name;
    if (isObj(name))
    {
        dataName = {};
        each(name, function (val, key)
        {
            dataName['data-' + key] = val;
        });
    }

    return $attr(nodes, dataName, val);
}