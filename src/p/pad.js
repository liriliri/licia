/* Pad string on the left and right sides if it's shorter than length.
 *
 * |Name  |Type  |Desc                  |
 * |------|------|----------------------|
 * |str   |string|String to pad         |
 * |len   |number|Padding length        |
 * |chars |string|String used as padding|
 * |return|string|Result string         |
 */

/* example
 * pad('a', 5); // -> '  a  '
 * pad('a', 5, '-'); // -> '--a--'
 * pad('abc', 3, '-'); // -> 'abc'
 * pad('abc', 5, 'ab'); // -> 'babca'
 * pad('ab', 5, 'ab'); // -> 'ababa'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function pad(str: string, len: number, chars?: string): string;
 */

_('repeat toStr');

exports = function(str, len, chars) {
    str = toStr(str);

    var strLen = str.length;

    chars = chars || ' ';

    if (strLen < len) {
        var padStr = repeat(chars, Math.ceil((len - strLen) / 2));
        str = padStr + str + padStr;
        str = str.substr(Math.ceil((str.length - len) / 2), len);
    }

    return str;
};
