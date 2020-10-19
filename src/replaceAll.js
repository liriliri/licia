/* Replace all instance in a string.
 *
 * |Name     |Desc                               |
 * |---------|-----------------------------------|
 * |str      |Source string                      |
 * |substr   |String to be replaced              |
 * |newSubstr|String to replace substr           |
 * |return   |New string with all substr replaced|
 */

/* example
 * replaceAll('hello world goodbye world', 'world', 'licia'); // -> 'hello licia goodbye licia'
 */

/* module
 * env: all
 * since: 1.23.0
 */

/* typescript
 * export declare function replaceAll(
 *     str: string,
 *     substr: string,
 *     newSubstr: string
 * ): string;
 */

_('escapeRegExp');

exports = function(str, substr, newSubstr) {
    return str.replace(new RegExp(escapeRegExp(substr), 'g'), newSubstr);
};
