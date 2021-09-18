/* Remove chars or white-spaces from beginning of string.
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |str   |String to trim    |
 * |chars |Characters to trim|
 * |return|Trimmed string    |
 */

/* example
 * ltrim(' abc  '); // -> 'abc  '
 * ltrim('_abc_', '_'); // -> 'abc_'
 * ltrim('_abc_', ['a', '_']); // -> 'bc_'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function ltrim(str: string, chars?: string | string[]): string;
 */

const regSpace = /^\s+/;

exports = function(str, chars) {
    if (chars == null) {
        if (str.trimLeft) {
            return str.trimLeft();
        }
        return str.replace(regSpace, '');
    }

    let start = 0;
    const len = str.length;
    const charLen = chars.length;
    let found = true;
    let i;
    let c;

    while (found && start < len) {
        found = false;
        i = -1;
        c = str.charAt(start);

        while (++i < charLen) {
            if (c === chars[i]) {
                found = true;
                start++;
                break;
            }
        }
    }

    return start >= len ? '' : str.substr(start, len);
};
