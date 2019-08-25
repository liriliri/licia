/* Simple html parser.
 *
 * |Name   |Type  |Desc         |
 * |-------|------|-------------|
 * |html   |string|Html to parse|
 * |handler|object|Handlers     |
 */

/* example
 * parseHtml('<div>licia</div>', {
 *     start: (tag, attrs, unary) => {},
 *     end: (tag) => {},
 *     comment: (text) => {},
 *     text: (text) => {}
 * });
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare namespace parseHtml {
 *     interface IHandlers {
 *         start?: (tag: string, attrs: any, unary: boolean) => void;
 *         end?: (tag: string) => void;
 *         comment?: (text: string) => void;
 *         text?: (text: string) => void;
 *     }
 * }
 * export declare function parseHtml(html: string, handlers: parseHtml.IHandlers): void;
 */

_('last arrToMap startWith lowerCase');

// https://johnresig.com/files/htmlparser.js
exports = function(html, handler) {
    const stack = [];
    let text;
    let lastHtml = html;

    while (html) {
        text = true;

        if (!last(stack) || !SPECIAL[last(stack)]) {
            if (startWith(html, '<!--')) {
                let endIdx = html.indexOf('-->');
                if (endIdx >= 0) {
                    if (handler.comment) {
                        handler.comment(html.substring(4, endIdx));
                    }
                    html = html.substring(endIdx + 3);
                    text = false;
                }
            } else if (startWith(html, '<!')) {
                const match = html.match(regDoctype);
                if (match) {
                    html = html.substring(match[0].length);
                    text = false;
                }
            } else if (startWith(html, '</')) {
                const match = html.match(regEndTag);
                if (match) {
                    html = html.substring(match[0].length);
                    match[0].replace(regEndTag, parseEndTag);
                    text = false;
                }
            } else if (startWith(html, '<')) {
                const match = html.match(regStartTag);
                if (match) {
                    html = html.substring(match[0].length);
                    match[0].replace(regStartTag, parseStartTag);
                    text = false;
                }
            }
            if (text) {
                let endIdx = html.indexOf('<');
                const text = endIdx < 0 ? html : html.substring(0, endIdx);
                html = endIdx < 0 ? '' : html.substring(endIdx);
                if (handler.text) handler.text(text);
            }
        } else {
            const execRes = new RegExp(`</${last(stack)}[^>]*>`).exec(html);

            if (execRes) {
                let text = html.substring(0, execRes.index);
                html = html.substring(execRes.index + execRes[0].length);

                text = text.replace(regCmt, '$1').replace(regCDATA, '$1');
                if (text && handler.text) handler.text(text);
            }

            parseEndTag('', last(stack));
        }

        if (lastHtml === html) {
            throw Error('Parse Error: ' + html);
        }
        lastHtml = html;
    }

    parseEndTag();

    function parseStartTag(tag, tagName, rest, unary) {
        tagName = lowerCase(tagName);
        unary = !!unary;

        if (!unary) stack.push(tagName);

        if (handler.start) {
            const attrs = {};

            rest.replace(regAttr, (all, $1, $2, $3, $4) => {
                attrs[$1] = $2 || $3 || $4;
            });

            handler.start(tagName, attrs, unary);
        }
    }

    function parseEndTag(tag, tagName) {
        tagName = lowerCase(tagName);
        let pos;

        if (!tagName) {
            pos = 0;
        } else {
            for (pos = stack.length - 1; pos >= 0; pos--) {
                if (stack[pos] === tagName) break;
            }
        }

        if (pos >= 0) {
            for (let i = stack.length - 1; i >= pos; i--) {
                if (handler.end) handler.end(stack[i]);
            }

            stack.length = pos;
        }
    }
};

const regDoctype = /^<!\s*doctype((?:\s+[\w:]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/i;
const regEndTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
const regStartTag = /^<([-A-Za-z0-9_]+)((?:\s+[-A-Za-z0-9_:@.]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/i;
const regAttr = /([-A-Za-z0-9_:@.]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
const regCmt = /<!--(.*?)-->/g;
const regCDATA = /<!\[CDATA\[(.*?)]]>/g;

// https://www.w3.org/TR/html/syntax.html#raw-text
const SPECIAL = arrToMap('script,style'.split(','));
