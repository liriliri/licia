/* TODO
 */

_('isUndef each $safeNodes');

exports = {
    html: propFactory('innerHTML'),
    text: propFactory('textContent'),
    val: propFactory('value')
};

function propFactory(name)
{
    return function (nodes, val)
    {
        nodes = $safeNodes(nodes);

        if (isUndef(val)) return nodes[0][name];

        each(nodes, function (node)
        {
            node[name] = val;
        });
    };
}
