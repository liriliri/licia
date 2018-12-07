/* Compile JavaScript template into function that can be evaluated for rendering.
 *
 * |Name  |Type    |Desc                      |
 * |------|--------|--------------------------|
 * |str   |string  |Template string           |
 * |return|function|Compiled template function|
 */

/* example
 * template('Hello <%= name %>!')({name: 'licia'}); // -> 'Hello licia!'
 * template('<p><%- name %></p>')({name: '<licia>'}); // -> '<p>&lt;licia&gt;</p>'
 * template('<%if (echo) {%>Hello licia!<%}%>')({echo: true}); // -> 'Hello licia!'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function template(str: string): Function;
 */

_('escape');

/* eslint-disable quotes */
var regEvaluate = /<%([\s\S]+?)%>/g,
    regInterpolate = /<%=([\s\S]+?)%>/g,
    regEscape = /<%-([\s\S]+?)%>/g,
    regMatcher = RegExp(
        [regEscape.source, regInterpolate.source, regEvaluate.source].join(
            '|'
        ) + '|$',
        'g'
    );

var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
};

var regEscapeChar = /\\|'|\r|\n|\u2028|\u2029/g;

var escapeChar = function(match) {
    return '\\' + escapes[match];
};

exports = function(str) {
    var index = 0,
        src = "__p+='";

    str.replace(regMatcher, function(
        match,
        escape,
        interpolate,
        evaluate,
        offset
    ) {
        src += str.slice(index, offset).replace(regEscapeChar, escapeChar);
        index = offset + match.length;

        if (escape) {
            src += "'+\n((__t=(" + escape + "))==null?'':util.escape(__t))+\n'";
        } else if (interpolate) {
            src += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
        } else if (evaluate) {
            src += "';\n" + evaluate + "\n__p+='";
        }

        return match;
    });

    src += "';\n";
    src = 'with(obj||{}){\n' + src + '}\n';
    src =
        "var __t,__p='',__j=Array.prototype.join," +
        "print=function(){__p+=__j.call(arguments,'');};\n" +
        src +
        'return __p;\n';

    var render = new Function('obj', 'util', src);

    return function(data, util) {
        if (!util) util = typeof _ === 'object' ? _ : {};

        return render.call(null, data, util);
    };
};
