/* bind events to certain dom elements.
 *
 * ```javascript
 * function clickHandler() {
 *     // Do something...
 * }
 * $event.on('#test', 'click', clickHandler);
 * $event.off('#test', 'click', clickHandler);
 * ```
 */

/* module
 * env: browser
 * test: browser
 */

_('delegate isUndef $safeEls');

exports = {
    on: eventFactory('add'),
    off: eventFactory('remove')
};

function eventFactory(type) {
    return function(nodes, event, selector, handler) {
        nodes = $safeEls(nodes);

        if (isUndef(handler)) {
            handler = selector;
            selector = undefined;
        }

        each(nodes, function(node) {
            delegate[type](node, event, selector, handler);
        });
    };
}
