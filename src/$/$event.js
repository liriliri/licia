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
 * test: browser
 */

/* typescript
 * export declare const $event: {
 *     on(
 *         element: $safeEls.El,
 *         event: string,
 *         selector: string,
 *         handler: Function
 *     ): void;
 *     on(element: $safeEls.El, event: string, handler: Function): void;
 *     off(
 *         element: $safeEls.El,
 *         event: string,
 *         selector: string,
 *         handler: Function
 *     ): void;
 *     off(element: $safeEls.El, event: string, handler: Function): void;
 * };
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
