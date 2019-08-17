/* CRC32 implementation.
 *
 * |Name      |Type                                |Desc                 |
 * |----------|------------------------------------|---------------------|
 * |input     |string Buffer ArrayBuffer Uint8Array|Data to calculate    |
 * |[previous]|number                              |Previous CRC32 result|
 * |return    |number                              |CRC16 result         |
 */

/* example
 * crc32('1234567890').toString(16); // -> '261daee5'
 */

/* module
 * env: all
 * test: all
 * since: 1.5.9
 */

/* typescript
 * export declare function crc32(
 *     input: string | Buffer | ArrayBuffer | Uint8Array,
 *     previous?: number
 * ): number;
 */

_('crc1');

let TABLE = [];

for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
        if (c & 1) {
            c = 0xedb88320 ^ (c >>> 1);
        } else {
            c = c >>> 1;
        }
    }
    TABLE[n] = c >>> 0;
}

if (typeof Int32Array !== 'undefined') TABLE = new Int32Array(TABLE);

exports = function(input, previous) {
    return exports.signed(input, previous) >>> 0;
};

exports.signed = function(input, previous) {
    input = crc1.transInput(input);

    let crc = previous === 0 ? 0 : ~~previous ^ -1;

    for (let i = 0, len = input.length; i < len; i++) {
        const byte = input[i];
        crc = TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
    }

    return crc ^ -1;
};
