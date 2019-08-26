/* Convert html string to dom elements.
 *
 * There should be only one root element.
 *
 * |Name  |Type   |Desc        |
 * |------|-------|------------|
 * |str   |string |Html string |
 * |return|element|Html element|
 */

/* example
 * toEl('<div>test</div>');
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare function toEl(str: string): Element;
 */

const doc = document;

exports = function(str) {
    const fragment = doc.createElement('body');

    fragment.innerHTML = str;

    return fragment.childNodes[0];
};

if (doc.createRange && doc.body) {
    const range = doc.createRange();
    range.selectNode(doc.body);

    if (range.createContextualFragment) {
        exports = function(str) {
            return range.createContextualFragment(str).childNodes[0];
        };
    }
}
