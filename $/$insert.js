/* Insert html on different position.
 *
 * ### before
 *
 * Insert content before elements.
 *
 * ### after
 *
 * Insert content after elements.
 *
 * ### prepend
 *
 * Insert content to the beginning of elements.
 *
 * ### append
 *
 * Insert content to the end of elements.
 *
 * |Name   |Type                |Desc                  |
 * |-------|--------------------|----------------------|
 * |element|string array element|Elements to manipulate|
 * |content|string              |Html strings          |
 *
 * ```javascript
 * // <div id="test"><div class="mark"></div></div>
 * $insert.before('#test', '<div>eris</div>');
 * // -> <div>eris</div><div id="test"><div class="mark"></div></div>
 * $insert.after('#test', '<div>eris</div>');
 * // -> <div id="test"><div class="mark"></div></div><div>eris</div>
 * $insert.prepend('#test', '<div>eris</div>');
 * // -> <div id="test"><div>eris</div><div class="mark"></div></div>
 * $insert.append('#test', '<div>eris</div>');
 * // -> <div id="test"><div class="mark"></div><div>eris</div></div>
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