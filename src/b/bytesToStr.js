/* Convert bytes to string.
 *
 * |Name  |Type  |Desc         |
 * |------|------|-------------|
 * |str   |array |Bytes array  |
 * |return|string|Result string|
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
 * export declare function bytesToStr(bytes: number[]): string;
 */

exports = function(bytes) {
    const str = [];

    for (let i = 0, len = bytes.length; i < len; i++) {
        str.push(String.fromCharCode(bytes[i]));
    }

    return str.join('');
};
