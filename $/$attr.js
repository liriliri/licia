/* Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
 *
 * Get the value of an attribute for the first element in the set of matched elements.
 *
 * |Name   |Type                |Desc                            |
 * |-------|--------------------|--------------------------------|
 * |element|string array element|Elements to manipulate          |
 * |name   |string              |Attribute name                  |
 * |return |string              |Attribute value of first element|
 *
 * Set one or more attributes for the set of matched elements.
 *
 * |Name   |Type                |Desc                  |
 * |-------|--------------------|----------------------|
 * |element|string array element|Elements to manipulate|
 * |name   |string              |Attribute name        |
 * |value  |string              |Attribute value       |
 *
 * |Name      |Type                |Desc                                  |
 * |----------|--------------------|--------------------------------------|
 * |element   |string array element|Elements to manipulate                |
 * |attributes|string              |Object of attribute-value pairs to set|
 *
 * ### remove: Remove an attribute from each element in the set of matched elements.
 *
 * |Name   |Type                |Desc                  |
 * |-------|--------------------|----------------------|
 * |element|string array element|Elements to manipulate|
 * |name   |string              |Attribute name        |
 *
 * ```javascript
 * $attr('#test', 'attr1', 'test');
 * $attr('#test', 'attr1'); // -> test
 * $attr.remove('#test', 'attr1');
 * $attr('#test', {
 *     'attr1': 'test',
 *     'attr2': 'test'
 * });
 * ```
 */

_('toArr isObj isStr each isUndef $safeEls');

function exports(els, name, val)
{
    els = $safeEls(els);

    var isGetter = isUndef(val) && isStr(name);
    if (isGetter) return getAttr(els[0], name);

    var attrs = name;
    if (!isObj(attrs))
    {
        attrs = {};
        attrs[name] = val;
    }

    setAttr(els, attrs);
}

exports.remove = function (els, names)
{
    els = $safeEls(els);
    names = toArr(names);

    each(els, function (node)
    {
        each(names, function (name)
        {
            node.removeAttribute(name);
        });
    });
};

function getAttr(el, name)
{
    return el.getAttribute(name);
}

function setAttr(els, attrs)
{
    each(els, function (el)
    {
        each(attrs, function (val, name)
        {
            el.setAttribute(name, val);
        });
    })
}