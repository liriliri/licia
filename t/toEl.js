/* Convert html string to dom elements.
 *
 * There should be only one root element.
 *
 * |Name  |Type   |Desc        |
 * |------|-------|------------|
 * |str   |string |Html string |
 * |return|element|Html element|
 *
 * ```javascript
 * toEl('<div>test</div>');
 * ```
 */

/* module
 * env: browser
 * test: browser
 */

var doc = document;

exports = function(str) {
    var fragment = doc.createElement('body');

    fragment.innerHTML = str;

    return fragment.childNodes[0];
};

if (doc.createRange) {
    var range = doc.createRange();
    range.selectNode(doc.body);

    if (range.createContextualFragment) {
        exports = function(str) {
            return range.createContextualFragment(str).childNodes[0];
        };
    }
}
