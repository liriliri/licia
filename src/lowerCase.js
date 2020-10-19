/* Convert string to lower case.
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |str   |String to convert |
 * |return|Lower cased string|
 */

/* example
 * lowerCase('TEST'); // -> 'test'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function lowerCase(str: string): string;
 */

_('toStr');

exports = function(str) {
    return toStr(str).toLocaleLowerCase();
};
