/* bind events to certain dom elements.
 */

/* example
 * function clickHandler() {
 *     // Do something...
 * }
 * $event.on('#test', 'click', clickHandler);
 * $event.off('#test', 'click', clickHandler);
 */

/* module
 * env: browser
 */

/* typescript
 * export declare const $event: {
 *     on(
 *         element: $safeEls.El,
 *         event: string,
 *         selector: string,
 *         handler: types.AnyFn
 *     ): void;
 *     on(element: $safeEls.El, event: string, handler: types.AnyFn): void;
 *     off(
 *         element: $safeEls.El,
 *         event: string,
 *         selector: string,
 *         handler: types.AnyFn
 *     ): void;
 *     off(element: $safeEls.El, event: string, handler: types.AnyFn): void;
 * };
 */

_('delegate isUndef $safeEls each types');

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
