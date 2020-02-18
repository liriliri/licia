/* Css selector parser and serializer.
 *
 * ### parse
 *
 * Parse css selector into js object.
 *
 * |Name    |Desc            |
 * |--------|----------------|
 * |selector|Css selector    |
 * |return  |Parsed js object|
 *
 * ### stringify
 *
 * Stringify object into an css selector.
 *
 * |Name  |Desc               |
 * |------|-------------------|
 * |groups|Object to stringify|
 * |return|Css selector       |
 */

/* example
 * const groups = selector.parse('#test, input.user[name="licia"]');
 * // -> [[{type: 'id', value: 'test'}],[{type: 'tag', value: 'input'}...]]
 * selector.stringify(groups);
 */

/* module
 * env: all
 * since: 1.14.0
 */

/* typescript
 * export declare namespace selector {
 *     interface IToken {
 *         type: string;
 *         value: string;
 *     }
 * }
 * export declare const selector: {
 *     parse(selector: string): Array<selector.IToken[]>;
 *     stringify(selector: Array<selector.IToken[]>): string;
 * }
 */

_('trim each identity map');

// https://github.com/jquery/sizzle
const whitespace = '[\\x20\\t\\r\\n\\f]';
const identifier = `(?:\\\\[\\da-fA-F]{1,6}${whitespace}?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+`;
const attributes = `\\[${whitespace}*(${identifier})(?:${whitespace}*([*^$|!~]?=)${whitespace}*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(${identifier}))|)${whitespace}*\\]`;
const pseudos = `::?(${identifier})(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|${attributes})*)|.*)\\)|)`;
const regComma = new RegExp(`^${whitespace}*,${whitespace}*`);
const regCombinators = new RegExp(
    `^${whitespace}*([>+~]|${whitespace})${whitespace}*`
);
const matchExpr = {
    id: {
        reg: new RegExp(`^#(${identifier})`),
        value(raw) {
            return raw.slice(1);
        },
        toStr(value) {
            return `#${value}`;
        }
    },
    class: {
        reg: new RegExp(`^\\.(${identifier})`),
        value(raw) {
            return raw.slice(1);
        },
        toStr(value) {
            return `.${value}`;
        }
    },
    tag: {
        reg: new RegExp(`^(${identifier}|[*])`),
        value: identity
    },
    attribute: {
        reg: new RegExp(`^${attributes}`),
        value(raw) {
            return raw.slice(1, raw.length - 1);
        },
        toStr(value) {
            return `[${value}]`;
        }
    },
    pseudo: {
        reg: new RegExp(`^${pseudos}`),
        value: identity
    }
};

each(matchExpr, item => {
    if (!item.value) item.value = identity;
    if (!item.toStr) item.toStr = identity;
});

function parse(selector) {
    selector = trim(selector);
    const groups = [];
    let tokens;
    let match;
    let matched;

    while (selector) {
        if (!matched || (match = regComma.exec(selector))) {
            if (match) {
                selector = selector.slice(match[0].length);
            }
            tokens = [];
            groups.push(tokens);
        }

        matched = false;

        if ((match = regCombinators.exec(selector))) {
            matched = match.shift();
            selector = selector.slice(matched.length);
            matched = trim(matched);
            if (!matched) matched = ' ';
            tokens.push({
                value: matched,
                type: 'combinator'
            });
        }

        each(matchExpr, ({ reg, value }, type) => {
            if ((match = reg.exec(selector))) {
                matched = match.shift();
                selector = selector.slice(matched.length);
                matched = trim(matched);
                tokens.push({
                    value: value(matched),
                    type
                });
            }
        });

        if (!matched) {
            break;
        }
    }

    return groups;
}

function stringify(groups) {
    return map(groups, group => {
        group = map(group, ({ type, value }) => {
            if (type === 'combinator') {
                return value === ' ' ? value : ` ${value} `;
            }

            return matchExpr[type].toStr(value);
        });

        return group.join('');
    }).join(', ');
}

exports = {
    parse,
    stringify
};
