/* Convert string into bytes.
 *
 * |Name         |Type  |Desc              |
 * |-------------|------|------------------|
 * |str          |string|String to convert |
 * |encoding=utf8|string|Encoding of string|
 * |return       |array |Bytes array       |
 */

/* example
 * strToBytes('licia'); // -> [108, 105, 99, 105, 97]
 */

/* module
 * env: all
 * test: all
 * since: 1.1.0
 */

/* typescript
 * export declare function strToBytes(
 *     str: string,
 *     encoding?: string
 * ): number[];
 */

_('utf8');

exports = function(str, encoding = 'utf8') {
    const bytes = [];

    if (encoding === 'utf8') {
        str = utf8.encode(str);
    }

    for (let i = 0, len = str.length; i < len; i++) {
        bytes.push(str.charCodeAt(i) & 0xff);
    }

    return bytes;
};
