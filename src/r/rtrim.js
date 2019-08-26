/* Remove chars or white-spaces from end of string.
 *
 * |Name   |Type        |Desc              |
 * |-------|------------|------------------|
 * |str    |string      |String to trim    |
 * |[chars]|string array|Characters to trim|
 * |return |string      |Trimmed string    |
 */

/* example
 * rtrim(' abc  '); // -> ' abc'
 * rtrim('_abc_', '_'); // -> '_abc'
 * rtrim('_abc_', ['c', '_']); // -> '_ab'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function rtrim(str: string, chars?: string | string[]): string;
 */

const regSpace = /\s+$/;

exports = function(str, chars) {
    if (chars == null) return str.replace(regSpace, '');

    let end = str.length - 1;
    const charLen = chars.length;
    let found = true;
    let i;
    let c;

    while (found && end >= 0) {
        found = false;
        i = -1;
        c = str.charAt(end);

        while (++i < charLen) {
            if (c === chars[i]) {
                found = true;
                end--;
                break;
            }
        }
    }

    return end >= 0 ? str.substring(0, end + 1) : '';
};
