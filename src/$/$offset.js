/* Get the position of the element in document.
 *
 * |Name   |Type                |Desc                  |
 * |-------|--------------------|----------------------|
 * |element|string array element|Elements to get offset|
 */

/* example
 * $offset('#test'); // -> {left: 0, top: 0, width: 0, height: 0}
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare namespace $offset {
 *     interface IOffset {
 *         left: number;
 *         top: number;
 *         width: number;
 *         height: number;
 *     }
 * }
 * export declare function $offset(element: $safeEls.El): $offset.IOffset;
 */

_('$safeEls');

exports = function(els) {
    els = $safeEls(els);

    var el = els[0];

    var clientRect = el.getBoundingClientRect();

    return {
        left: clientRect.left + window.pageXOffset,
        top: clientRect.top + window.pageYOffset,
        width: Math.round(clientRect.width),
        height: Math.round(clientRect.height)
    };
};
