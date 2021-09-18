/* Remove chars or white-spaces from beginning end of string.
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |str   |String to trim    |
 * |chars |Characters to trim|
 * |return|Trimmed string    |
 */

/* example
 * trim(' abc  '); // -> 'abc'
 * trim('_abc_', '_'); // -> 'abc'
 * trim('_abc_', ['a', 'c', '_']); // -> 'b'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function trim(str: string, chars?: string | string[]): string;
 */

_('ltrim rtrim');

exports = function(str, chars) {
    if (str.trim) {
        return str.trim();
    }

    return ltrim(rtrim(str, chars), chars);
};
