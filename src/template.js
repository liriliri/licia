/* Compile JavaScript template into function that can be evaluated for rendering.
 *
 * |Name  |Desc                      |
 * |------|--------------------------|
 * |str   |Template string           |
 * |util  |Utility functions         |
 * |return|Compiled template function|
 */

/* example
 * template('Hello <%= name %>!')({ name: 'licia' }); // -> 'Hello licia!'
 * template('<p><%- name %></p>')({ name: '<licia>' }); // -> '<p>&lt;licia&gt;</p>'
 * template('<%if (echo) {%>Hello licia!<%}%>')({ echo: true }); // -> 'Hello licia!'
 * template('<p><%= util["upperCase"](name) %></p>', {
 *     upperCase: function(str) {
 *         return str.toLocaleUpperCase();
 *     }
 * })({ name: 'licia' }); // -> '<p>LICIA</p>'
 */

/* module
 * env: node browser
 * test: all
 */

/* typescript
 * export declare function template(str: string, util?: any): types.AnyFn;
 */

_('escape defaults escapeJsStr types');

/* global _ */
const regMatcher = /<%-([\s\S]+?)%>|<%=([\s\S]+?)%>|<%([\s\S]+?)%>|$/g;

exports = function(str, util) {
    if (!util) {
        util = typeof _ === 'object' ? _ : { escape };
    } else {
        defaults(util, { escape });
    }

    let index = 0;
    let src = `__p+='`;

    str.replace(regMatcher, function(
        match,
        escape,
        interpolate,
        evaluate,
        offset
    ) {
        src += escapeJsStr(str.slice(index, offset));
        index = offset + match.length;

        if (escape) {
            src += `'+\n((__t=(${escape}))==null?'':util.escape(__t))+\n'`;
        } else if (interpolate) {
            src += `'+\n((__t=(${interpolate}))==null?'':__t)+\n'`;
        } else if (evaluate) {
            src += `';\n${evaluate}\n__p+='`;
        }

        return match;
    });

    src += `';\n`;
    src = `with(obj||{}){\n${src}}\n`;
    src = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n${src}return __p;\n`;

    const render = new Function('obj', 'util', src);

    return data => render.call(null, data, util);
};
