/* Pad string on the left side if it's shorter than length.
 *
 * |Name   |Type  |Desc                  |
 * |-------|------|----------------------|
 * |str    |string|String to pad         |
 * |len    |number|Padding length        |
 * |[chars]|string|String used as padding|
 * |return |string|Resulted string       |
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

_('repeat toStr');

exports = function(str, len, chars) {
    str = toStr(str);

    var strLen = str.length;

    chars = chars || ' ';

    if (strLen < len) str = (repeat(chars, len - strLen) + str).slice(-len);

    return str;
};
