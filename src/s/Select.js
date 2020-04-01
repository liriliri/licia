/* Simple wrapper of querySelectorAll to make dom selection easier.
 *
 * ### constructor
 *
 * |Name    |Desc               |
 * |--------|-------------------|
 * |selector|Dom selector string|
 *
 * ### find
 *
 * Get desdendants of current matched elements.
 *
 * |Name    |Desc               |
 * |--------|-------------------|
 * |selector|Dom selector string|
 *
 * ### each
 *
 * Iterate over matched elements.
 *
 * |Name|Desc                                |
 * |----|------------------------------------|
 * |fn  |Function to execute for each element|
 */

/* example
 * const $test = new Select('#test');
 * $test.find('.test').each(function(idx, element) {
 *     // Manipulate dom nodes
 * });
 */

/* module
 * env: browser
 */

/* typescript
 * export declare class Select {
 *     constructor(selector: string | Element);
 *     find(selector: string): Select;
 *     each(fn: types.AnyFn): Select;
 * }
 */

_('Class isStr each types');

exports = Class({
    className: 'Select',
    initialize(selector) {
        this.length = 0;

        if (!selector) return this;

        if (isStr(selector)) return rootSelect.find(selector);

        if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
        }
    },
    find(selector) {
        const ret = new exports();

        this.each(function() {
            mergeArr(ret, this.querySelectorAll(selector));
        });

        return ret;
    },
    each(fn) {
        each(this, function(element, idx) {
            fn.call(element, idx, element);
        });

        return this;
    }
});

const rootSelect = new exports(document);

function mergeArr(first, second) {
    const len = second.length;
    let i = first.length;

    for (let j = 0; j < len; j++) first[i++] = second[j];

    first.length = i;

    return first;
}
