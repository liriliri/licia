/* Convert HTML entities back, the inverse of escape.
 *
 * |Name  |Type  |Desc              |
 * |------|------|------------------|
 * |str   |string|String to unescape|
 * |return|string|unescaped string  |
 *
 * ```javascript
 * unescape('You &amp; Me'); -> // -> 'You & Me'
 * ```
 */

_('escape keys invert');

function exports(str)
{
    return regTest.test(str) ? str.replace(regReplace, replaceFn) : str;
}

var map = invert(escape.map);

var regSrc = '(?:' + keys(map).join('|') + ')',
    regTest = new RegExp(regSrc),
    regReplace = new RegExp(regSrc, 'g');

function replaceFn(match)
{
    return map[match];
}
