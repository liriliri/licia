/* Check if element is hidden.
 *
 * |Name   |Type   |Desc                     |
 * |-------|-------|-------------------------|
 * |el     |element|Target element           |
 * |options|object |Check options            |
 * |return |boolean|True if element is hidden|
 *
 * Available options:
 *
 * |Name            |Type   |Desc                         |
 * |----------------|-------|-----------------------------|
 * |display=true    |boolean|Check if it is displayed     |
 * |visibility=false|boolean|Check visibility css property|
 * |opacity=false   |boolean|Check opacity css property   |
 * |size=false      |boolean|Check width and height       |
 * |viewport=false  |boolean|Check if it is in viewport   |
 * |overflow=false  |boolean|Check if hidden in overflow  |
 */

/* example
 * isHidden(document.createElement('div')); // -> true
 */

/* module
 * env: browser
 * since: 1.18.0
 */

/* typescript
 * export declare function isHidden(el: Element, options?: {
 *     display?: boolean;
 *     visibility?: boolean;
 *     opacity?: boolean;
 *     size?: boolean;
 *     viewport?: boolean;
 *     overflow?: boolean;
 * }): boolean;
 */

_('root');

const getComputedStyle = root.getComputedStyle;
const document = root.document;

exports = function(
    el,
    {
        display = true,
        visibility = false,
        opacity = false,
        size = false,
        viewport = false,
        overflow = false
    } = {}
) {
    if (display) {
        return el.offsetParent === null;
    }

    const computedStyle = getComputedStyle(el);
    if (visibility && computedStyle.visibility === 'hidden') {
        return true;
    }

    if (opacity) {
        if (computedStyle.opacity === '0') {
            return true;
        } else {
            let cur = el;
            while ((cur = cur.parentElement)) {
                const computedStyle = getComputedStyle(cur);
                if (computedStyle.opacity === '0') {
                    return true;
                }
            }
        }
    }

    const clientRect = el.getBoundingClientRect();
    if (size && (clientRect.width === 0 || clientRect.height === 0)) {
        return true;
    }

    if (viewport) {
        const containerRect = {
            top: 0,
            left: 0,
            right: document.documentElement.clientWidth,
            bottom: document.documentElement.clientHeight
        };
        return isOutside(clientRect, containerRect);
    }

    if (overflow) {
        let cur = el;
        while ((cur = cur.parentElement)) {
            const computedStyle = getComputedStyle(cur);
            const overflow = computedStyle.overflow;
            if (overflow === 'scroll' || overflow === 'hidden') {
                const curRect = cur.getBoundingClientRect();
                if (isOutside(clientRect, curRect)) return true;
            }
        }
    }

    return false;
};

function isOutside(clientRect, containerRect) {
    return (
        clientRect.right < containerRect.left ||
        clientRect.left > containerRect.right ||
        clientRect.bottom < containerRect.top ||
        clientRect.top > containerRect.bottom
    );
}
