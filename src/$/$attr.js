/* Element attribute manipulation.
 *
 * Get the value of an attribute for the first element in the set of matched elements.
 *
 * |Name   |Desc                            |
 * |-------|--------------------------------|
 * |element|Elements to manipulate          |
 * |name   |Attribute name                  |
 * |return |Attribute value of first element|
 *
 * Set one or more attributes for the set of matched elements.
 *
 * |Name   |Desc                  |
 * |-------|----------------------|
 * |element|Elements to manipulate|
 * |name   |Attribute name        |
 * |val    |Attribute value       |
 *
 * |Name      |Desc                                  |
 * |----------|--------------------------------------|
 * |element   |Elements to manipulate                |
 * |attributes|Object of attribute-value pairs to set|
 *
 * ### remove
 *
 * Remove an attribute from each element in the set of matched elements.
 *
 * |Name   |Desc                  |
 * |-------|----------------------|
 * |element|Elements to manipulate|
 * |name   |Attribute name        |
 */

/* example
 * $attr('#test', 'attr1', 'test');
 * $attr('#test', 'attr1'); // -> test
 * $attr.remove('#test', 'attr1');
 * $attr('#test', {
 *     'attr1': 'test',
 *     'attr2': 'test'
 * });
 */

/* module
 * env: browser
 */

/* typescript
 * export declare namespace $attr {
 *     interface IAttr {
 *         (element: $safeEls.El, name: string, value: string): void;
 *         (element: $safeEls.El, attributes: { [name: string]: string }): void;
 *         (element: $safeEls.El, name: string): string;
 *         remove(element: $safeEls.El, name: string): void;
 *     }
 * }
 * export declare const $attr: $attr.IAttr;
 */

_('toArr isObj isStr each isUndef $safeEls');

exports = function(els, name, val) {
    els = $safeEls(els);

    const isGetter = isUndef(val) && isStr(name);
    if (isGetter) return getAttr(els[0], name);

    let attrs = name;
    if (!isObj(attrs)) {
        attrs = {};
        attrs[name] = val;
    }

    setAttr(els, attrs);
};

exports.remove = function(els, names) {
    els = $safeEls(els);
    names = toArr(names);

    each(els, function(node) {
        each(names, function(name) {
            node.removeAttribute(name);
        });
    });
};

function getAttr(el, name) {
    return el.getAttribute(name);
}

function setAttr(els, attrs) {
    each(els, function(el) {
        each(attrs, function(val, name) {
            el.setAttribute(name, val);
        });
    });
}
