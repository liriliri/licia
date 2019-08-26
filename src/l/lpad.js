/* Pad string on the left side if it's shorter than length.
 *
 * |Name   |Type  |Desc                  |
 * |-------|------|----------------------|
 * |str    |string|String to pad         |
 * |len    |number|Padding length        |
 * |[chars]|string|String used as padding|
 * |return |string|Result string         |
 */

/* example
 * lpad('a', 5); // -> '    a'
 * lpad('a', 5, '-'); // -> '----a'
 * lpad('abc', 3, '-'); // -> 'abc'
 * lpad('abc', 5, 'ab'); // -> 'ababc'
 */

/* module
 * env: all
 * test: all
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
