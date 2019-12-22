/* Convert bytes to 32-bit words.
 *
 * Useful when using CryptoJS.
 *
 * |Name  |Type |Desc      |
 * |------|-----|----------|
 * |bytes |array|Byte array|
 * |return|array|Word array|
 */

/* example
 * bytesToWords([0x12, 0x34, 0x56, 0x78]); // -> [0x12345678]
 */

/* module
 * env: all
 * since: 1.16.0
 */

/* typescript
 * export declare function bytesToWords(bytes: number[]): number[];
 */

exports = function(bytes) {
    const words = [];

    for (let i = 0, len = bytes.length; i < len; i++) {
        words[i >>> 2] |= bytes[i] << (24 - (i % 4) * 8);
    }

    return words;
};
