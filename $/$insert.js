/* Insert html on different position. TODO
 *
 * ```javascript
 * $insert.append('#test', '<div>test</div>');
 * ```
 */

_('each $safeEls');

exports = {
    before: insertFactory('beforebegin'),
    after: insertFactory('afterend'),
    append: insertFactory('beforeend'),
    prepend: insertFactory('afterbegin')
};

function insertFactory(type)
{
    return function (nodes, val)
    {
        nodes = $safeEls(nodes);

        each(nodes, function (node)
        {
            node.insertAdjacentHTML(type, val);
        });
    };
}