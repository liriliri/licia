/* Escapes a string for insertion into HTML, replacing &, <, >, ", `, and ' characters.
 *
 * |Name  |Desc            |
 * |------|----------------|
 * |str   |String to escape|
 * |return|Escaped string  |
 */

/* example
 * escape('You & Me'); // -> 'You &amp; Me'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function escape(str: string): string;
 */

_('keys');

exports = function(str) {
    return regTest.test(str) ? str.replace(regReplace, replaceFn) : str;
};

const map = (exports.map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
});

const regSrc = '(?:' + keys(map).join('|') + ')';
const regTest = new RegExp(regSrc);
const regReplace = new RegExp(regSrc, 'g');
const replaceFn = match => map[match];
