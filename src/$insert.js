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
 * |Name   |Desc                   |
 * |-------|-----------------------|
 * |element|Elements to manipulate |
 * |content|Html strings or element|
 */

/* example
 * // <div id="test"><div class="mark"></div></div>
 * $insert.before('#test', '<div>licia</div>');
 * // -> <div>licia</div><div id="test"><div class="mark"></div></div>
 * $insert.after('#test', '<div>licia</div>');
 * // -> <div id="test"><div class="mark"></div></div><div>licia</div>
 * $insert.prepend('#test', '<div>licia</div>');
 * // -> <div id="test"><div>licia</div><div class="mark"></div></div>
 * $insert.append('#test', '<div>licia</div>');
 * // -> <div id="test"><div class="mark"></div><div>licia</div></div>
 */

/* module
 * env: browser
 */

/* typescript
 * export declare namespace $insert {
 *     type IInsert = (element: $safeEls.El, content: string | Element) => void;
 * }
 * export declare const $insert: {
 *     before: $insert.IInsert;
 *     after: $insert.IInsert;
 *     append: $insert.IInsert;
 *     prepend: $insert.IInsert;
 * };
 */

_('each $safeEls isStr');

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
            if (isStr(val)) {
                node.insertAdjacentHTML(type, val);
            } else {
                const parentNode = node.parentNode;
                switch (type) {
                    case 'beforebegin':
                        if (parentNode) {
                            parentNode.insertBefore(val, node);
                        }
                        break;
                    case 'afterend':
                        if (parentNode) {
                            parentNode.insertBefore(val, node.nextSibling);
                        }
                        break;
                    case 'beforeend':
                        node.appendChild(val);
                        break;
                    case 'afterbegin':
                        node.prepend(val);
                        break;
                }
            }
        });
    };
}
