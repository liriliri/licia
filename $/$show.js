/* Show elements.
 *
 * |Name   |Type                |Desc            |
 * |-------|--------------------|----------------|
 * |element|string array element|Elements to show|
 *
 * ```javascript
 * $show('#test');
 * ```
 */

/* module
 * env: browser
 * test: browser
 */

_('each $safeEls');

function exports(els) {
    els = $safeEls(els);

    each(els, function(el) {
        if (isHidden(el)) {
            el.style.display = getDefDisplay(el.nodeName);
        }
    });
}

function isHidden(el) {
    return getComputedStyle(el, '').getPropertyValue('display') == 'none';
}

var elDisplay = {};

function getDefDisplay(elName) {
    var el, display;

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
