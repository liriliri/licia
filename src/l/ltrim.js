/* Remove chars or white-spaces from beginning of string.
 *
 * |Name  |Type        |Desc              |
 * |------|------------|------------------|
 * |str   |string      |String to trim    |
 * |chars |string array|Characters to trim|
 * |return|string      |Trimmed string    |
 */

/* example
 * ltrim(' abc  '); // -> 'abc  '
 * ltrim('_abc_', '_'); // -> 'abc_'
 * ltrim('_abc_', ['a', '_']); // -> 'bc_'
 */

/* module
 * env: all
 * test: all
 */

var regSpace = /^\s+/;

exports = function(str, chars) {
    if (chars == null) return str.replace(regSpace, '');

    var start = 0,
        len = str.length,
        charLen = chars.length,
        found = true,
        i,
        c;

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
