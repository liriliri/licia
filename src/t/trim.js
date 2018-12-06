/* Remove chars or white-spaces from beginning end of string.
 *
 * |Name  |Type        |Desc              |
 * |------|------------|------------------|
 * |str   |string      |String to trim    |
 * |chars |string array|Characters to trim|
 * |return|string      |Trimmed string    |
 */

/* example
 * trim(' abc  '); // -> 'abc'
 * trim('_abc_', '_'); // -> 'abc'
 * trim('_abc_', ['a', 'c', '_']); // -> 'b'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function trim(str: string, chars?: string | string[]): string;
 */

_('ltrim rtrim');

var regSpace = /^\s+|\s+$/g;

exports = function(str, chars) {
    if (chars == null) return str.replace(regSpace, '');

    return ltrim(rtrim(str, chars), chars);
};
