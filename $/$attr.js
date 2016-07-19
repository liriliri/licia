/* Attributes manipulation. TODO
 *
 * ```javascript
 * $attr('#test', 'attr1', 'test');
 * $attr('#test', 'attr1'); // -> test
 * $attr.remove('#test', 'attr1');
 * ```
 */

_('toArr isObj isStr each isUndef $safeNodes');

function exports(nodes, name, val)
{
    nodes = $safeNodes(nodes);

    var isGetter = isUndef(val) && isStr(name);
    if (isGetter) return getAttr(nodes[0], name);

    var attrs = name;
    if (!isObj(attrs))
    {
        attrs = {};
        attrs[name] = val;
    }

    setAttr(nodes, attrs);
}

exports.remove = function (nodes, names)
{
    nodes = $safeNodes(nodes);
    names = toArr(names);

    each(nodes, function (node)
    {
        each(names, function (name)
        {
            node.removeAttribute(name);
        });
    });
};

function getAttr(node, name)
{
    return node.getAttribute(name);
}

function setAttr(nodes, attrs)
{
    each(nodes, function (node)
    {
        each(attrs, function (val, name)
        {
            node.setAttribute(name, val);
        });
    })
}