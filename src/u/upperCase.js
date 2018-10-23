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

function exports(str) {
    return toStr(str).toLocaleUpperCase();
}
