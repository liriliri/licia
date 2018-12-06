/* Pad string on the right side if it's shorter than length.
 *
 * |Name  |Type  |Desc                  |
 * |------|------|----------------------|
 * |str   |string|String to pad         |
 * |len   |number|Padding length        |
 * |chars |string|String used as padding|
 * |return|string|Resulted string       |
 */

/* example
 * rpad('a', 5); // -> 'a    '
 * rpad('a', 5, '-'); // -> 'a----'
 * rpad('abc', 3, '-'); // -> 'abc'
 * rpad('abc', 5, 'ab'); // -> 'abcab'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function rpad(str: string, len: number, chars?: string): string;
 */

_('repeat toStr');

exports = function(str, len, chars) {
    str = toStr(str);

    var strLen = str.length;

    chars = chars || ' ';

    if (strLen < len) str = (str + repeat(chars, len - strLen)).slice(0, len);

    return str;
};
