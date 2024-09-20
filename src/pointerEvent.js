/* Get the pointer event name, use touch and mouse events as a fallback if not supported.
 *
 * |Name  |Desc                        |
 * |------|----------------------------|
 * |type  |Event type, down, move or up|
 * |return|Pointer event name          |
 */

/* example
 * pointerEvent('down'); // -> 'pointerdown' if supported
 */

/* module
 * env: browser
 * since: 1.42.0
 */

/* typescript
 * export declare function pointerEvent(type: 'down' | 'move' | 'up'): string;
 */

_('root');

const touchEvents = {
    down: 'touchstart',
    move: 'touchmove',
    up: 'touchend'
};

const mouseEvents = {
    down: 'mousedown',
    move: 'mousemove',
    up: 'mouseup'
};

const pointerEvents = {
    down: 'pointerdown',
    move: 'pointermove',
    up: 'pointerup'
};

const hasPointerSupport = 'PointerEvent' in root;
const hasTouchSupport = 'ontouchstart' in root;

exports = function(type) {
    if (hasPointerSupport) {
        return pointerEvents[type];
    }

    return hasTouchSupport ? touchEvents[type] : mouseEvents[type];
};
