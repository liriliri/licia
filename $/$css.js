/* Element css manipulation.
 *
 * Get the computed style properties for the first element in the set of matched elements.
 *
 * |Name   |Type                |Desc                      |
 * |-------|--------------------|--------------------------|
 * |element|string array element|Elements to manipulate    |
 * |name   |string              |Property name             |
 * |return |string              |Css value of first element|
 *
 * Set one or more CSS properties for the set of matched elements.
 *
 * |Name   |Type                |Desc                  |
 * |-------|--------------------|----------------------|
 * |element|string array element|Elements to manipulate|
 * |name   |string              |Property name         |
 * |value  |string              |Css value             |
 *
 * |Name      |Type                |Desc                            |
 * |----------|--------------------|--------------------------------|
 * |element   |string array element|Elements to manipulate          |
 * |properties|object              |Object of css-value pairs to set|
 *
 * ```javascript
 * $css('#test', {
 *     'color': '#fff',
 *     'background': 'black'
 * });
 * $css('#test', 'display', 'block');
 * $css('#test', 'color'); // -> #fff
 * ```
 */

_('isStr isObj camelCase kebabCase isUndef contain isNum $safeEls');

function exports(nodes, name, val)
{
    nodes = $safeEls(nodes);

    var isGetter = isUndef(val) && isStr(name);
    if (isGetter) return getCss(nodes[0], name);

    var css = name;
    if (!isObj(css))
    {
        css = {};
        css[name] = val;
    }

    setCss(nodes, css);
}

function getCss(node, name)
{
    return node.style[camelCase(name)];
}

function setCss(nodes, css)
{
    each(nodes, function (node)
    {
        var cssText = ';';
        each(css, function (val, key)
        {
            cssText += kebabCase(key) + ':' + addPx(key, val) + ';';
        });
        node.style.cssText += cssText;
    });
}

var cssNumProps = [
    'column-count',
    'columns',
    'font-weight',
    'line-weight',
    'opacity',
    'z-index',
    'zoom'
];

function addPx(key, val)
{
    var needPx = isNum(val) && !contain(cssNumProps, kebabCase(key));

    return needPx ? val + 'px' : val;
}