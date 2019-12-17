/* Convert string into bytes.
 *
 * |Name         |Type  |Desc              |
 * |-------------|------|------------------|
 * |str          |string|String to convert |
 * |encoding=utf8|string|Encoding of string|
 * |return       |array |Bytes array       |
 *
 * Supported encoding: utf8, hex, base64
 */

/* example
 * strToBytes('licia'); // -> [108, 105, 99, 105, 97]
 * strToBytes('qK6b/w==', 'base64'); // -> [168, 174, 155, 255]
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

_('utf8 hex base64');

exports = function(str, encoding = 'utf8') {
    if (encoding === 'hex') return hex.decode(str);
    if (encoding === 'base64') return base64.decode(str);

    const bytes = [];

    if (encoding === 'utf8') {
        str = utf8.encode(str);
    }

    for (let i = 0, len = str.length; i < len; i++) {
        bytes.push(str.charCodeAt(i) & 0xff);
    }

    return bytes;
};
