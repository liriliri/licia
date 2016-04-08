_('delegate isUndef $safeNodes');

$event = {
    on: eventFactory('add'),
    off: eventFactory('remove')
};

function eventFactory(type)
{
    return function (nodes, event, selector, handler)
    {
        nodes = $safeNodes(nodes);

        if (isUndef(handler))
        {
            handler = selector;
            selector = undefined;
        }

        each(nodes, function (node)
        {
            delegate[type](node, event, selector, handler);
        });
    };
}