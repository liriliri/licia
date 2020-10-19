/* Pad string on the right side if it's shorter than length.
 *
 * |Name  |Desc                  |
 * |------|----------------------|
 * |str   |String to pad         |
 * |len   |Padding length        |
 * |chars |String used as padding|
 * |return|Result string         |
 */

/* example
 * rpad('a', 5); // -> 'a    '
 * rpad('a', 5, '-'); // -> 'a----'
 * rpad('abc', 3, '-'); // -> 'abc'
 * rpad('abc', 5, 'ab'); // -> 'abcab'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function rpad(str: string, len: number, chars?: string): string;
 */

_('repeat toStr');

exports = function(str, len, chars) {
    str = toStr(str);

    const strLen = str.length;

    chars = chars || ' ';

    if (strLen < len) str = (str + repeat(chars, len - strLen)).slice(0, len);

    return str;
};
