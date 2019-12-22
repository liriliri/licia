/* Convert 32-bit words to bytes.
 *
 * |Name  |Type |Desc      |
 * |------|-----|----------|
 * |words |array|word array|
 * |return|array|byte array|
 */

/* example
 * wordsToBytes([0x12345678]); // -> [0x12, 0x34, 0x56, 0x78]
 */

/* module
 * env: all
 * since: 1.16.0
 */

/* typescript
 * export declare function wordsToBytes(words: number[]): number[];
 */

exports = function(words) {
    const bytes = [];

    for (let b = 0, len = words.length * 32; b < len; b += 8) {
        bytes.push((words[b >>> 5] >>> (24 - (b % 32))) & 0xff);
    }

    return bytes;
};
