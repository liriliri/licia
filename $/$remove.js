/* TODO
 */

_('each $safeEls');

exports = function (nodes)
{
    nodes = $safeEls(nodes);

    each(nodes, function (node)
    {
        var parent = node.parentNode;

        if (parent) parent.removeChild(node);
    });
};