/* Element property html, text, val getter and setter.
 *
 * ### html
 *
 * Get the HTML contents of the first element in the set of matched elements or
 * set the HTML contents of every matched element.
 *
 * ### text
 *
 * Get the combined text contents of each element in the set of matched
 * elements, including their descendants, or set the text contents of the
 * matched elements.
 *
 * ### val
 *
 * Get the current value of the first element in the set of matched elements or
 * set the value of every matched element.
 */

/* example
 * $property.html('#test', 'licia');
 * $property.html('#test'); // -> licia
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare namespace $property {
 *     interface IProperty {
 *         (element: $safeEls.El, value: string): void;
 *         (element: $safeEls.El): string;
 *     }
 * }
 * export declare const $property: {
 *     html: $property.IProperty;
 *     val: $property.IProperty;
 *     text: $property.IProperty;
 * };
 */ 

_('isUndef each $safeEls');

exports = {
    html: propFactory('innerHTML'),
    text: propFactory('textContent'),
    val: propFactory('value')
};

function propFactory(name) {
    return function(nodes, val) {
        nodes = $safeEls(nodes);

        if (isUndef(val)) return nodes[0][name];

        each(nodes, function(node) {
            node[name] = val;
        });
    };
}
