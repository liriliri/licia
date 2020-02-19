/* Element css manipulation.
 *
 * Get the computed style properties for the first element in the set of matched elements.
 *
 * |Name   |Desc                      |
 * |-------|--------------------------|
 * |element|Elements to manipulate    |
 * |name   |Property name             |
 * |return |Css value of first element|
 *
 * Set one or more CSS properties for the set of matched elements.
 *
 * |Name   |Desc                  |
 * |-------|----------------------|
 * |element|Elements to manipulate|
 * |name   |Property name         |
 * |val    |Css value             |
 *
 * |Name      |Desc                            |
 * |----------|--------------------------------|
 * |element   |Elements to manipulate          |
 * |properties|Object of css-value pairs to set|
 */

/* example
 * $css('#test', {
 *     color: '#fff',
 *     background: 'black'
 * });
 * $css('#test', 'display', 'block');
 * $css('#test', 'color'); // -> #fff
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function $css(element: $safeEls.El, name: string): string;
 * export declare function $css(element: $safeEls.El, name: string, val: string): void;
 * export declare function $css(
 *     element: $safeEls.El,
 *     properties: { [name: string]: string }
 * ): void;
 */

_('isStr isObj kebabCase isUndef contain isNum $safeEls prefix each');

exports = function(nodes, name, val) {
    nodes = $safeEls(nodes);

    const isGetter = isUndef(val) && isStr(name);
    if (isGetter) return getCss(nodes[0], name);

    let css = name;
    if (!isObj(css)) {
        css = {};
        css[name] = val;
    }

    setCss(nodes, css);
};

function getCss(node, name) {
    return (
        node.style[prefix(name)] ||
        getComputedStyle(node, '').getPropertyValue(name)
    );
}

function setCss(nodes, css) {
    each(nodes, function(node) {
        let cssText = ';';
        each(css, function(val, key) {
            key = prefix.dash(key);
            cssText += key + ':' + addPx(key, val) + ';';
        });
        node.style.cssText += cssText;
    });
}

const cssNumProps = [
    'column-count',
    'columns',
    'font-weight',
    'line-weight',
    'opacity',
    'z-index',
    'zoom'
];

function addPx(key, val) {
    const needPx = isNum(val) && !contain(cssNumProps, kebabCase(key));

    return needPx ? val + 'px' : val;
}
