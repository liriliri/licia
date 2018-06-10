/* Remove the set of matched elements from the DOM.
 *
 * |Name   |Type                |Desc              |
 * |-------|--------------------|------------------|
 * |element|string array element|Elements to delete|
 *
 * ```javascript
 * $remove('#test');
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
        var parent = el.parentNode;

        if (parent) parent.removeChild(el);
    });
}
