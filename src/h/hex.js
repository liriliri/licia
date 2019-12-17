/* Hex encoding and decoding.
 *
 * ### encode
 *
 * Turn a byte array into a hex string.
 *
 * |Name  |Type  |Desc      |
 * |------|------|----------|
 * |bytes |array |Byte array|
 * |return|string|hex string|
 *
 * ### decode
 *
 * Turn a hex string into a byte array.
 *
 * |Name  |Type  |Desc      |
 * |------|------|----------|
 * |str   |string|hex string|
 * |return|array |Byte array|
 */

/* example
 * hex.encode([168, 174, 155, 255]); // -> 'a8ae9bff'
 * hex.decode('a8ae9bff'); // -> [168, 174, 155, 255]
 */

/* module
 * env: all
 */

/* typescript
 * export declare const hex: {
 *     encode(bytes: number[]): string;
 *     decode(str: string): number[];
 * };
 */

_('isOdd');

exports = {
    encode(bytes) {
        const hex = [];

        for (let i = 0, len = bytes.length; i < len; i++) {
            const byte = bytes[i];
            hex.push((byte >>> 4).toString(16));
            hex.push((byte & 0xf).toString(16));
        }

        return hex.join('');
    },
    decode(str) {
        const bytes = [];

        let len = str.length;
        if (isOdd(len)) len--;

        for (let i = 0; i < len; i += 2) {
            bytes.push(parseInt(str.substr(i, 2), 16));
        }

        return bytes;
    }
};
