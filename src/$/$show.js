/* Show elements.
 *
 * |Name   |Desc            |
 * |-------|----------------|
 * |element|Elements to show|
 */

/* example
 * $show('#test');
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function $show(element: $safeEls.El): void;
 */

_('each $safeEls');

exports = function(els) {
    els = $safeEls(els);

    each(els, function(el) {
        if (isHidden(el)) {
            el.style.display = getDefDisplay(el.nodeName);
        }
    });
};

function isHidden(el) {
    return getComputedStyle(el, '').getPropertyValue('display') == 'none';
}

const elDisplay = {};

function getDefDisplay(elName) {
    let el, display;

    if (!elDisplay[elName]) {
        el = document.createElement(elName);
        document.documentElement.appendChild(el);
        display = getComputedStyle(el, '').getPropertyValue('display');
        el.parentNode.removeChild(el);
        display == 'none' && (display = 'block');
        elDisplay[elName] = display;
    }

    return elDisplay[elName];
}
