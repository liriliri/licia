/* Html parser and serializer.
 *
 * ### parse
 *
 * Parse html string into js object.
 *
 * |Name  |Type  |Desc            |
 * |------|------|----------------|
 * |html  |string|Html string     |
 * |return|array |Parsed js object|
 *
 * ### stringify
 *
 * Stringify object into an html string.
 *
 * |Name  |Type  |Desc               |
 * |------|------|-------------------|
 * |tree  |array |Object to stringify|
 * |return|string|Html string        |
 */

/* example
 * const tree = html.parse('<div id="name">licia</div>');
 * // -> [{tag: 'div', attrs: {id: 'name'}, content: ['licia']}]
 * html.stringify(tree);
 */

/* module
 * env: all
 * test: all
 * since: 1.6.0
 */

/* typescript
 * export declare const html: {
 *     parse(html: string): any;
 *     stringify(tree: any[]): string;
 * };
 */

_('parseHtml Stack isArr each isStr mapObj');

function parse(html) {
    const ret = [];
    const stack = new Stack();

    parseHtml(html, {
        start(tag, attrs) {
            attrs = mapObj(attrs, val => unescapeQuote(val));
            stack.push({
                tag,
                attrs
            });
        },
        end() {
            const node = stack.pop();

            if (!stack.size) {
                ret.push(node);
                return;
            }

            const lastNode = stack.peek();
            if (!isArr(lastNode.content)) {
                lastNode.content = [];
            }

            lastNode.content.push(node);
        },
        comment(text) {
            const comment = `<!--${text}-->`;
            const lastNode = stack.peek();

            if (!lastNode) {
                ret.push(comment);
                return;
            }

            if (!lastNode.content) lastNode.content = [];
            lastNode.content.push(comment);
        },
        text(text) {
            const lastNode = stack.peek();
            if (!lastNode) {
                ret.push(text);
                return;
            }

            if (!lastNode.content) lastNode.content = [];
            lastNode.content.push(text);
        }
    });

    return ret;
}

function stringify(tree) {
    let ret = '';

    if (isArr(tree)) {
        each(tree, node => (ret += stringify(node)));
    } else if (isStr(tree)) {
        ret = tree;
    } else {
        ret += `<${tree.tag}`;
        each(
            tree.attrs,
            (val, key) => (ret += ` ${key}="${escapeQuote(val)}"`)
        );
        ret += '>';
        if (tree.content) ret += stringify(tree.content);
        ret += `</${tree.tag}>`;
    }

    return ret;
}

const unescapeQuote = str => str.replace(/&quot;/g, '"');
const escapeQuote = str => str.replace(/"/g, '&quot;');

exports = {
    parse,
    stringify
};
