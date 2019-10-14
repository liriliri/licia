/* UCS-2 encoding and decoding.
 *
 * ### encode
 *
 * Create a string using an array of code point values.
 *
 * |Name  |Type  |Desc                |
 * |------|------|--------------------|
 * |arr   |array |Array of code points|
 * |return|string|Encoded string      |
 *
 * ### decode
 *
 * Create an array of code point values using a string.
 *
 * |Name  |Type  |Desc                |
 * |------|------|--------------------|
 * |str   |string|Input string        |
 * |return|array |Array of code points|
 */

/* example
 * ucs2.encode([0x61, 0x62, 0x63]); // -> 'abc'
 * ucs2.decode('abc'); // -> [0x61, 0x62, 0x63]
 * '𝌆'.length; // -> 2
 * ucs2.decode('𝌆').length; // -> 1
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare const ucs2: {
 *     encode(arr: number[]): string;
 *     decode(str: string): number[];
 * };
 */

// https://mathiasbynens.be/notes/javascript-encoding
exports = {
    encode: function(arr) {
        return String.fromCodePoint.apply(String, arr);
    },
    decode: function(str) {
        const ret = [];

        let i = 0;
        const len = str.length;

        while (i < len) {
            const c = str.charCodeAt(i++);

            // A high surrogate
            if (c >= 0xd800 && c <= 0xdbff && i < len) {
                const tail = str.charCodeAt(i++);
                // nextC >= 0xDC00 && nextC <= 0xDFFF
                if ((tail & 0xfc00) === 0xdc00) {
                    // C = (H - 0xD800) * 0x400 + L - 0xDC00 + 0x10000
                    ret.push(((c & 0x3ff) << 10) + (tail & 0x3ff) + 0x10000);
                } else {
                    ret.push(c);
                    i--;
                }
            } else {
                ret.push(c);
            }
        }

        return ret;
    }
};
