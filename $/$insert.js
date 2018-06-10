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
 * $insert.before('#test', '<div>licia</div>');
 * // -> <div>licia</div><div id="test"><div class="mark"></div></div>
 * $insert.after('#test', '<div>licia</div>');
 * // -> <div id="test"><div class="mark"></div></div><div>licia</div>
 * $insert.prepend('#test', '<div>licia</div>');
 * // -> <div id="test"><div>licia</div><div class="mark"></div></div>
 * $insert.append('#test', '<div>licia</div>');
 * // -> <div id="test"><div class="mark"></div><div>licia</div></div>
 * ```
 */

/* module
 * env: browser
 * test: browser
 */

_('each $safeEls');

exports = {
    before: insertFactory('beforebegin'),
    after: insertFactory('afterend'),
    append: insertFactory('beforeend'),
    prepend: insertFactory('afterbegin')
};

function insertFactory(type) {
    return function(nodes, val) {
        nodes = $safeEls(nodes);

        each(nodes, function(node) {
            node.insertAdjacentHTML(type, val);
        });
    };
}
