/* Add vendor prefixes to a CSS attribute.
 *
 * |Name  |Type  |Desc                  |
 * |------|------|----------------------|
 * |name  |string|Property name         |
 * |return|string|Prefixed property name|
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
 * test: browser
 */

_('memoize camelCase upperFirst has kebabCase');

exports = memoize(function(name) {
    name = name.replace(regPrefixes, '');
    name = camelCase(name);

    if (has(style, name)) return name;

    var i = prefixes.length;
    while (i--) {
        var prefixName = prefixes[i] + upperFirst(name);
        if (has(style, prefixName)) return prefixName;
    }

    return name;
});

exports.dash = memoize(function(name) {
    var camelCaseResult = exports(name);

    return (
        (regPrefixes.test(camelCaseResult) ? '-' : '') +
        kebabCase(camelCaseResult)
    );
});

var prefixes = ['O', 'ms', 'Moz', 'Webkit'],
    regPrefixes = /^(O)|(ms)|(Moz)|(Webkit)|(-o-)|(-ms-)|(-moz-)|(-webkit-)/g,
    style = document.createElement('p').style;
