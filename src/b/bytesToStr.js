/* Convert bytes to string.
 *
 * |Name         |Type  |Desc              |
 * |-------------|------|------------------|
 * |str          |array |Bytes array       |
 * |encoding=utf8|string|Encoding of string|
 * |return       |string|Result string     |
 */

/* example
 * bytesToStr([108, 105, 99, 105, 97]); // -> 'licia'
 */

/* module
 * env: all
 * test: all
 * since: 1.1.0
 */

/* typescript
 * export declare function bytesToStr(
 *     bytes: number[],
 *     encoding?: string
 * ): string;
 */

_('utf8');

exports = function(bytes, encoding = 'utf8') {
    let str = [];

    for (let i = 0, len = bytes.length; i < len; i++) {
        str.push(String.fromCharCode(bytes[i]));
    }

    str = str.join('');

    if (encoding === 'utf8') {
        str = utf8.decode(str);
    }

    return str;
};
