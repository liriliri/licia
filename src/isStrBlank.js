/* Check if string is blank.
 *
 * |Name  |Desc                   |
 * |------|-----------------------|
 * |str   |String to check        |
 * |return|True if string is blank|
 */

/* example
 * isStrBlank('licia'); // -> false
 * isStrBlank(''); // -> true
 * isStrBlank('    '); // -> true
 * isStrBlank('\r\n '); // -> true
 */

/* module
 * env: all
 * since: 1.39.0
 */

/* typescript
 * export declare function isStrBlank(str: string): boolean;
 */

exports = function(str) {
    for (let i = 0, len = str.length; i < len; i++) {
        const c = str[i];
        if (
            c !== ' ' &&
            c !== '\n' &&
            c !== '\r' &&
            c !== '\t' &&
            c !== '\f' &&
            c !== '\v'
        ) {
            return false;
        }
    }

    return true;
};
