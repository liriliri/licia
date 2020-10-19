/* Convert HTML entities back, the inverse of escape.
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |str   |String to unescape|
 * |return|Unescaped string  |
 */

/* example
 * unescape('You &amp; Me'); // -> 'You & Me'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function unescape(str: string): string;
 */

_('escape keys invert');

exports = function(str) {
    return regTest.test(str) ? str.replace(regReplace, replaceFn) : str;
};

const map = invert(escape.map);

const regSrc = '(?:' + keys(map).join('|') + ')';
const regTest = new RegExp(regSrc);
const regReplace = new RegExp(regSrc, 'g');

function replaceFn(match) {
    return map[match];
}
