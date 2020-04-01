/* Create html with JavaScript.
 *
 * |Name    |Desc           |
 * |--------|---------------|
 * |tag     |Tag name       |
 * |attrs   |Attributes     |
 * |...child|Children       |
 * |return  |Created element|
 */

/* example
 * const el = h(
 *     'div#test.title',
 *     {
 *         onclick: function() {},
 *         title: 'test'
 *     },
 *     'inner text'
 * );
 * document.body.appendChild(el);
 */

/* module
 * env: browser
 * since: 1.5.1
 */

/* typescript
 * export declare function h(
 *     tag: string,
 *     attrs?: { [name: string]: any },
 *     ...child: Array<string | HTMLElement>
 * ): HTMLElement;
 */

_('isEl isStr startWith $class $css each isFn');

exports = function(tag, attrs, ...children) {
    if (isEl(attrs) || isStr(attrs)) {
        children.unshift(attrs);
        attrs = null;
    }
    if (!attrs) attrs = {};

    const { tagName, id, classes } = parseTag(tag);

    const el = document.createElement(tagName);
    if (id) el.setAttribute('id', id);
    $class.add(el, classes);

    each(children, child => {
        if (isStr(child)) {
            el.appendChild(document.createTextNode(child));
        } else if (isEl(child)) {
            el.appendChild(child);
        }
    });

    each(attrs, (val, key) => {
        if (isStr(val)) {
            el.setAttribute(key, val);
        } else if (isFn(val) && startWith(key, 'on')) {
            el.addEventListener(key.slice(2), val, false);
        } else if (key === 'style') {
            $css(el, val);
        }
    });

    return el;
};

function parseTag(tag) {
    let tagName = 'div';
    let id = '';
    const classes = [];
    const words = [];

    let word = '';
    for (let i = 0, len = tag.length; i < len; i++) {
        const c = tag[i];
        if (c === '#' || c === '.') {
            words.push(word);
            word = c;
        } else {
            word += c;
        }
    }
    words.push(word);

    for (let i = 0, len = words.length; i < len; i++) {
        word = words[i];
        if (!word) continue;
        if (startWith(word, '#')) {
            id = word.slice(1);
        } else if (startWith(word, '.')) {
            classes.push(word.slice(1));
        } else {
            tagName = word;
        }
    }

    return {
        tagName,
        id,
        classes
    };
}
