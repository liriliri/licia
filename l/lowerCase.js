/* Convert string to lower case.
 * 
 * |Name  |Type  |Desc              |
 * |------|------|------------------|
 * |str   |string|String to convert |
 * |return|string|Lower cased string|
 * 
 * ```javascript
 * lowerCase('TEST'); // -> 'test'
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('toStr');

function exports(str) {
    return toStr(str).toLocaleLowerCase();
}
