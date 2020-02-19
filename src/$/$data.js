/* Wrapper of $attr, adds data- prefix to keys.
 */

/* example
 * $data('#test', 'attr1', 'eustia');
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare function $data(
 *     element: $safeEls.El,
 *     name: string,
 *     value: string
 * ): void;
 * export declare function $data(
 *     element: $safeEls.El,
 *     attributes: { [name: string]: string }
 * ): void;
 * export declare function $data(element: $safeEls.El, name: string): string;
 */

/* eslint-disable no-unused-vars */
_('$attr isStr isObj each $safeEls');

exports = function(nodes, name, val) {
    let dataName = name;

    if (isStr(name)) dataName = 'data-' + name;
    if (isObj(name)) {
        dataName = {};
        each(name, function(val, key) {
            dataName['data-' + key] = val;
        });
    }

    return $attr(nodes, dataName, val);
};
