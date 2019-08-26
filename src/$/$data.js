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
 * export declare namespace $data {
 *     interface IData {
 *         (element: $safeEls.El, name: string, value: string): void;
 *         (element: $safeEls.El, attributes: { [name: string]: string }): void;
 *         (element: $safeEls.El, name: string): string;
 *     }
 * }
 * export declare const $data: $data.IData;
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
