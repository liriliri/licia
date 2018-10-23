/* Convert string to upper case.
 * 
 * |Name  |Type  |Desc             |
 * |------|------|-----------------|
 * |str   |string|String to convert|
 * |return|string|Uppercased string|
 */

/* example
 * upperCase('test'); // -> 'TEST'
 */

/* module
 * env: all
 * test: all
 */

_('toStr');

exports = function(str) {
    return toStr(str).toLocaleUpperCase();
};
