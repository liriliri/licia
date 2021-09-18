/* Remove chars or white-spaces from end of string.
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |str   |String to trim    |
 * |chars |Characters to trim|
 * |return|Trimmed string    |
 */

/* example
 * rtrim(' abc  '); // -> ' abc'
 * rtrim('_abc_', '_'); // -> '_abc'
 * rtrim('_abc_', ['c', '_']); // -> '_ab'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function rtrim(str: string, chars?: string | string[]): string;
 */

exports = function(str, chars) {
    if (chars == null) {
        if (str.trimRight) {
            return str.trimRight();
        }
        chars = ' ';
    }

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
