/* Pad string on the left side if it's shorter than length.
 *
 * |Name  |Desc                  |
 * |------|----------------------|
 * |str   |String to pad         |
 * |len   |Padding length        |
 * |chars |String used as padding|
 * |return|Result string         |
 */

/* example
 * lpad('a', 5); // -> '    a'
 * lpad('a', 5, '-'); // -> '----a'
 * lpad('abc', 3, '-'); // -> 'abc'
 * lpad('abc', 5, 'ab'); // -> 'ababc'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function lpad(str: string, len: number, chars?: string): string;
 */

_('repeat toStr');

exports = function(str, len, chars) {
    str = toStr(str);

    const strLen = str.length;

    chars = chars || ' ';

    if (strLen < len) str = (repeat(chars, len - strLen) + str).slice(-len);

    return str;
};
