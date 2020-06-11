/* Simple string template.
 *
 * |Name  |Desc           |
 * |------|---------------|
 * |str   |Template string|
 * |data  |Data to pass in|
 * |return|Result string  |
 */

/* example
 * strTpl('Hello, {{name.first}}!', { name: { first: 'licia' } }); // -> 'Hello, licia!'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function strTpl(str: string, data: types.PlainObj<any>): string;
 */

_('safeGet types toStr');

const regSep = /{{(.*?)}}/g;

exports = function(str, data) {
    return str.replace(regSep, (match, key) => toStr(safeGet(data, key)));
};
