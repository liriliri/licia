_('$safeNodes');

exports = function (nodes)
{
    nodes = $safeNodes(nodes);

    var node = nodes[0];

    var clientRect = node.getBoundingClientRect();

    return {
        left: clientRect.left + window.pageXOffset,
        top : clientRect.top  + window.pageYOffset,
        width : Math.round(clientRect.width),
        height: Math.round(clientRect.height)
    };
};