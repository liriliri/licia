_('each $safeNodes');

exports = function (nodes)
{
    nodes = $safeNodes(nodes);

    each(nodes, function (node)
    {
        var parent = node.parentNode;

        if (parent) parent.removeChild(node);
    });
};