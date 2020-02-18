/* Add vendor prefixes to a CSS attribute.
 *
 * |Name  |Desc                  |
 * |------|----------------------|
 * |name  |Property name         |
 * |return|Prefixed property name|
 *
 * ### dash
 *
 * Create a dasherize version.
 */

/* example
 * prefix('text-emphasis'); // -> 'WebkitTextEmphasis'
 * prefix.dash('text-emphasis'); // -> '-webkit-text-emphasis'
 * prefix('color'); // -> 'color'
 */

/* module
 * env: browser
 */

/* typescript
 * export declare namespace prefix {
 *     function dash(name: string): string;
 * }
 * export declare function prefix(name: string): string;
 */

_('memoize camelCase upperFirst has kebabCase');

exports = memoize(function(name) {
    name = name.replace(regPrefixes, '');
    name = camelCase(name);

    if (has(style, name)) return name;

    let i = prefixes.length;
    while (i--) {
        const prefixName = prefixes[i] + upperFirst(name);
        if (has(style, prefixName)) return prefixName;
    }

    return name;
});

exports.dash = memoize(function(name) {
    const camelCaseResult = exports(name);

    return (
        (regPrefixes.test(camelCaseResult) ? '-' : '') +
        kebabCase(camelCaseResult)
    );
});

const prefixes = ['O', 'ms', 'Moz', 'Webkit'];
const regPrefixes = /^(O)|(ms)|(Moz)|(Webkit)|(-o-)|(-ms-)|(-moz-)|(-webkit-)/g;
const style = document.createElement('p').style;
