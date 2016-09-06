/* bind events to certain dom elements. TODO
 *
 * ```javascript
 * $event.on('#test', 'click', function ()
 * {
 *     // ...
 * });
 * ```
 */

_('delegate isUndef $safeEls');

exports = {
    on: eventFactory('add'),
    off: eventFactory('remove')
};

function eventFactory(type)
{
    return function (nodes, event, selector, handler)
    {
        nodes = $safeEls(nodes);

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