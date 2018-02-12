/* Convert string to upper case.
 * 
 * |Name  |Type  |Desc             |
 * |------|------|-----------------|
 * |str   |string|String to convert|
 * |return|string|Uppercased string|
 * 
 * ```javascript
 * uppercase('test'); // -> 'TEST'
 * ```
 */

/* module
 * env: all
 * test: all
 */ 

_('toStr'); 

function exports(str) 
{
    return toStr(str).toLocaleUpperCase();
}