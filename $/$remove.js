_('each $safeNodes');

$remove = function (nodes)
{
    nodes = $safeNodes(nodes);

    each(nodes, function (node)
    {
        var parent = node.parentNode;

        if (parent) parent.removeChild(node);
    });
};