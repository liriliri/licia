/* Remove the set of matched elements from the DOM.
 *
 * |Name   |Desc              |
 * |-------|------------------|
 * |element|Elements to delete|
 */

/* example
 * $remove('#test');
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function $remove(element: $safeEls.El);
 */

_('each $safeEls');

exports = function(els) {
    els = $safeEls(els);

    each(els, function(el) {
        const parent = el.parentNode;

        if (parent) parent.removeChild(el);
    });
};
