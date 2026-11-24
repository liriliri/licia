/* Html parser and serializer.
 *
 * ### parse
 *
 * Parse html string into js object.
 *
 * |Name  |Desc            |
 * |------|----------------|
 * |html  |Html string     |
 * |return|Parsed js object|
 *
 * ### stringify
 *
 * Stringify object into an html string.
 *
 * |Name  |Desc               |
 * |------|-------------------|
 * |tree  |Object to stringify|
 * |return|Html string        |
 */

/* example
 * const tree = html.parse('<div id="name">licia</div>');
 * // -> [{tag: 'div', attrs: {id: 'name'}, content: ['licia']}]
 * html.stringify(tree);
 */

/* module
 * env: all
 * since: 1.6.0
 */

/* typescript
 * export declare const html: {
 *     parse(html: string): any[];
 *     stringify(tree: any[]): string;
 * };
 */

_('parseHtml Stack isArr each isStr mapObj');

function parse(html) {
    const ret = [];
    const stack = new Stack();

    function append(node) {
        if (!stack.size) {
            ret.push(node);
            return;
        }

        const lastNode = stack.peek();
        if (!isArr(lastNode.content)) {
            lastNode.content = [];
        }
        lastNode.content.push(node);
    }

    parseHtml(html, {
        start(tag, attrs, unary) {
            attrs = mapObj(attrs, val => unescapeQuote(val));
            const node = {
                tag,
                attrs
            };

            if (unary) {
                append(node);
                return;
            }

            stack.push(node);
        },
        end() {
            append(stack.pop());
        },
        comment(text) {
            append(`<!--${text}-->`);
        },
        text(text) {
            append(text);
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
