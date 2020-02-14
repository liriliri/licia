/* Convert string to upper case.
 *
 * |Name  |Desc             |
 * |------|-----------------|
 * |str   |String to convert|
 * |return|Uppercased string|
 */

/* example
 * upperCase('test'); // -> 'TEST'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function upperCase(str: string): string;
 */

_('toStr');

exports = function(str) {
    return toStr(str).toLocaleUpperCase();
};
