/* SM4 implementation.
 *
 * ### encrypt
 *
 * SM4 encryption, result as hex string.
 *
 * ### decrypt
 *
 * SM4 decryption, pass hex string as input.
 *
 * |Name   |Desc                           |
 * |-------|-------------------------------|
 * |data   |Data to be encrypted/decrypted |
 * |key    |Secret key, 16 bytes           |
 * |options|Options                        |
 * |return |Encrypted/decrypted data       |
 *
 * ### Options
 *
 * |Name    |Desc                                      |
 * |--------|------------------------------------------|
 * |mode    |Block cipher mode, `ecb` or `cbc`         |
 * |iv      |Initialization vector, required by `cbc` |
 * |padding |Padding mode, `pkcs#7` or `none`          |
 * |output  |Output type, `string` or `array`          |
 */

/* example
 * sm4.encrypt('licia', '0123456789abcdeffedcba9876543210'); // -> '291c47f32f9aec055ac80310acd84260'
 * sm4.decrypt(
 *     '291c47f32f9aec055ac80310acd84260',
 *     '0123456789abcdeffedcba9876543210'
 * ); // -> 'licia'
 */

/* module
 * env: all
 * since: 1.50.0
 */

/* typescript
 * export declare const sm4: {
 *     encrypt(
 *         data: string | number[] | Uint8Array,
 *         key: string | number[] | Uint8Array,
 *         options?: {
 *             mode?: string;
 *             iv?: string | number[] | Uint8Array;
 *             padding?: string;
 *             output?: string;
 *         }
 *     ): string | number[];
 *     decrypt(
 *         data: string | number[] | Uint8Array,
 *         key: string | number[] | Uint8Array,
 *         options?: {
 *             mode?: string;
 *             iv?: string | number[] | Uint8Array;
 *             padding?: string;
 *             output?: string;
 *         }
 *     ): string | number[];
 * };
 */

_(
    'isStr isArr isTypedArr strToBytes bytesToStr hex bytesToWords wordsToBytes isNode'
);

const BLOCK_SIZE = 16;

// prettier-ignore
const SBOX = [
    0xd6, 0x90, 0xe9, 0xfe, 0xcc, 0xe1, 0x3d, 0xb7, 0x16, 0xb6, 0x14, 0xc2, 0x28, 0xfb, 0x2c, 0x05,
    0x2b, 0x67, 0x9a, 0x76, 0x2a, 0xbe, 0x04, 0xc3, 0xaa, 0x44, 0x13, 0x26, 0x49, 0x86, 0x06, 0x99,
    0x9c, 0x42, 0x50, 0xf4, 0x91, 0xef, 0x98, 0x7a, 0x33, 0x54, 0x0b, 0x43, 0xed, 0xcf, 0xac, 0x62,
    0xe4, 0xb3, 0x1c, 0xa9, 0xc9, 0x08, 0xe8, 0x95, 0x80, 0xdf, 0x94, 0xfa, 0x75, 0x8f, 0x3f, 0xa6,
    0x47, 0x07, 0xa7, 0xfc, 0xf3, 0x73, 0x17, 0xba, 0x83, 0x59, 0x3c, 0x19, 0xe6, 0x85, 0x4f, 0xa8,
    0x68, 0x6b, 0x81, 0xb2, 0x71, 0x64, 0xda, 0x8b, 0xf8, 0xeb, 0x0f, 0x4b, 0x70, 0x56, 0x9d, 0x35,
    0x1e, 0x24, 0x0e, 0x5e, 0x63, 0x58, 0xd1, 0xa2, 0x25, 0x22, 0x7c, 0x3b, 0x01, 0x21, 0x78, 0x87,
    0xd4, 0x00, 0x46, 0x57, 0x9f, 0xd3, 0x27, 0x52, 0x4c, 0x36, 0x02, 0xe7, 0xa0, 0xc4, 0xc8, 0x9e,
    0xea, 0xbf, 0x8a, 0xd2, 0x40, 0xc7, 0x38, 0xb5, 0xa3, 0xf7, 0xf2, 0xce, 0xf9, 0x61, 0x15, 0xa1,
    0xe0, 0xae, 0x5d, 0xa4, 0x9b, 0x34, 0x1a, 0x55, 0xad, 0x93, 0x32, 0x30, 0xf5, 0x8c, 0xb1, 0xe3,
    0x1d, 0xf6, 0xe2, 0x2e, 0x82, 0x66, 0xca, 0x60, 0xc0, 0x29, 0x23, 0xab, 0x0d, 0x53, 0x4e, 0x6f,
    0xd5, 0xdb, 0x37, 0x45, 0xde, 0xfd, 0x8e, 0x2f, 0x03, 0xff, 0x6a, 0x72, 0x6d, 0x6c, 0x5b, 0x51,
    0x8d, 0x1b, 0xaf, 0x92, 0xbb, 0xdd, 0xbc, 0x7f, 0x11, 0xd9, 0x5c, 0x41, 0x1f, 0x10, 0x5a, 0xd8,
    0x0a, 0xc1, 0x31, 0x88, 0xa5, 0xcd, 0x7b, 0xbd, 0x2d, 0x74, 0xd0, 0x12, 0xb8, 0xe5, 0xb4, 0xb0,
    0x89, 0x69, 0x97, 0x4a, 0x0c, 0x96, 0x77, 0x7e, 0x65, 0xb9, 0xf1, 0x09, 0xc5, 0x6e, 0xc6, 0x84,
    0x18, 0xf0, 0x7d, 0xec, 0x3a, 0xdc, 0x4d, 0x20, 0x79, 0xee, 0x5f, 0x3e, 0xd7, 0xcb, 0x39, 0x48
];

// prettier-ignore
const CK = [
    0x00070e15, 0x1c232a31, 0x383f464d, 0x545b6269, 0x70777e85, 0x8c939aa1, 0xa8afb6bd, 0xc4cbd2d9,
    0xe0e7eef5, 0xfc030a11, 0x181f262d, 0x343b4249, 0x50575e65, 0x6c737a81, 0x888f969d, 0xa4abb2b9,
    0xc0c7ced5, 0xdce3eaf1, 0xf8ff060d, 0x141b2229, 0x30373e45, 0x4c535a61, 0x686f767d, 0x848b9299,
    0xa0a7aeb5, 0xbcc3cad1, 0xd8dfe6ed, 0xf4fb0209, 0x10171e25, 0x2c333a41, 0x484f565d, 0x646b7279
];

const FK = [0xa3b1bac6, 0x56aa3350, 0x677d9197, 0xb27022dc];

exports = {
    encrypt(data, key, options) {
        return crypt(true, data, key, options);
    },

    decrypt(data, key, options) {
        return crypt(false, data, key, options);
    }
};

function crypt(encrypt, data, key, options) {
    options = options || {};

    const mode = options.mode || 'ecb';
    const padding = options.padding || 'pkcs#7';
    const output = options.output || 'string';

    if (mode !== 'ecb' && mode !== 'cbc') {
        throw new Error('Invalid mode: ' + mode);
    }
    if (padding !== 'pkcs#7' && padding !== 'pkcs#5' && padding !== 'none') {
        throw new Error('Invalid padding: ' + padding);
    }
    if (output !== 'string' && output !== 'array') {
        throw new Error('Invalid output: ' + output);
    }

    const keyBytes = toBytes(key, true);
    if (keyBytes.length !== BLOCK_SIZE) throw new Error('Invalid key');

    let iv = [];
    if (mode === 'cbc') {
        if (options.iv === undefined || options.iv === null) {
            throw new Error('Invalid iv');
        }
        iv = toBytes(options.iv, true);
        if (iv.length !== BLOCK_SIZE) throw new Error('Invalid iv');
    }

    // A string is encoded in utf8 when encrypting and in hex when decrypting.
    const bytes = encrypt ? toBytes(data) : toBytes(data, true);

    const result = nodeCrypto
        ? nodeCrypt(encrypt, bytes, keyBytes, iv, mode, padding)
        : jsCrypt(encrypt, bytes, keyBytes, iv, mode, padding);

    if (!nodeCrypto) {
        if (output === 'array') return result;
        return encrypt ? hex.encode(result) : bytesToStr(result);
    }

    // The node implementation returns a buffer, convert it to an array or hex.
    if (output === 'array') return Array.prototype.slice.call(result);
    if (encrypt) return result.toString('hex');
    return bytesToStr(result);
}

function jsCrypt(encrypt, bytes, keyBytes, iv, mode, padding) {
    const input = encrypt ? pad(bytes, padding) : bytes;
    if (input.length % BLOCK_SIZE !== 0) {
        throw new Error('Data is not a multiple of 16 bytes');
    }

    const roundKeys = expandKey(keyBytes);
    const result =
        mode === 'cbc'
            ? cryptCBC(encrypt, input, roundKeys, iv)
            : cryptECB(encrypt, input, roundKeys);

    return encrypt || padding === 'none' ? result : removePadding(result);
}

function nodeCrypt(encrypt, bytes, keyBytes, iv, mode, padding) {
    // The padding is handled by the cipher itself when it is enabled.
    if (!encrypt || padding === 'none') {
        if (bytes.length % BLOCK_SIZE !== 0) {
            throw new Error('Data is not a multiple of 16 bytes');
        }
    }

    const cipherName = 'sm4-' + mode;
    const cipherIv = iv.length ? Buffer.from(iv) : null;
    const cipher = encrypt
        ? nodeCrypto.createCipheriv(cipherName, Buffer.from(keyBytes), cipherIv)
        : nodeCrypto.createDecipheriv(
              cipherName,
              Buffer.from(keyBytes),
              cipherIv
          );

    cipher.setAutoPadding(padding !== 'none');

    try {
        return Buffer.concat([
            cipher.update(Buffer.from(bytes)),
            cipher.final()
        ]);
    } catch (e) {
        if (!encrypt && padding !== 'none') throw new Error('Invalid padding');
        throw e;
    }
}

function toBytes(input, hexString) {
    if (isStr(input)) return strToBytes(input, hexString ? 'hex' : 'utf8');
    if (!isArr(input) && !isTypedArr(input)) throw new Error('Invalid input');
    return Array.prototype.slice.call(input);
}

function expandKey(key) {
    const roundKeys = new Array(32);
    const x = bytesToWords(key);

    for (let i = 0; i < 4; i++) {
        x[i] = (x[i] ^ FK[i]) >>> 0;
    }

    for (let r = 0; r < 32; r++) {
        const t =
            (x[(r + 1) % 4] ^ x[(r + 2) % 4] ^ x[(r + 3) % 4] ^ CK[r]) >>> 0;
        x[r % 4] = (x[r % 4] ^ L2(tau(t))) >>> 0;
        roundKeys[r] = x[r % 4];
    }

    return roundKeys;
}

function cryptECB(encrypt, bytes, roundKeys) {
    const keys = encrypt ? roundKeys : reverseKeys(roundKeys);
    const words = bytesToWords(bytes);
    const result = [];

    for (let i = 0; i < words.length; i += 4) {
        const block = cryptBlock(words.slice(i, i + 4), keys);
        for (let j = 0; j < 4; j++) result.push(block[j]);
    }

    return wordsToBytes(result);
}

function cryptCBC(encrypt, bytes, roundKeys, iv) {
    const keys = encrypt ? roundKeys : reverseKeys(roundKeys);
    const words = bytesToWords(bytes);
    const result = [];
    let vector = bytesToWords(iv);

    for (let i = 0; i < words.length; i += 4) {
        const block = new Array(4);

        for (let j = 0; j < 4; j++) {
            block[j] = encrypt
                ? (words[i + j] ^ vector[j]) >>> 0
                : words[i + j] >>> 0;
        }

        const output = cryptBlock(block, keys);

        for (let j = 0; j < 4; j++) {
            result.push(encrypt ? output[j] : (output[j] ^ vector[j]) >>> 0);
        }

        vector = encrypt ? output : block;
    }

    return wordsToBytes(result);
}

function cryptBlock(words, roundKeys) {
    const x = words.slice();

    for (let r = 0; r < 32; r++) {
        const t =
            (x[(r + 1) % 4] ^
                x[(r + 2) % 4] ^
                x[(r + 3) % 4] ^
                roundKeys[r]) >>>
            0;
        x[r % 4] = (x[r % 4] ^ L1(tau(t))) >>> 0;
    }

    return [x[3] >>> 0, x[2] >>> 0, x[1] >>> 0, x[0] >>> 0];
}

function pad(bytes, padding) {
    if (padding === 'none') return bytes;

    const count = BLOCK_SIZE - (bytes.length % BLOCK_SIZE);
    const result = bytes.slice();
    for (let i = 0; i < count; i++) result.push(count);

    return result;
}

function removePadding(bytes) {
    const len = bytes.length;
    const count = bytes[len - 1];

    if (count < 1 || count > BLOCK_SIZE || count > len) {
        throw new Error('Invalid padding');
    }

    for (let i = 1; i <= count; i++) {
        if (bytes[len - i] !== count) throw new Error('Invalid padding');
    }

    return bytes.slice(0, len - count);
}

function reverseKeys(roundKeys) {
    const keys = new Array(roundKeys.length);
    for (let i = 0, len = roundKeys.length; i < len; i++) {
        keys[i] = roundKeys[len - i - 1];
    }
    return keys;
}

// Non-linear transformation.
function tau(x) {
    return (
        ((SBOX[(x >>> 24) & 0xff] << 24) |
            (SBOX[(x >>> 16) & 0xff] << 16) |
            (SBOX[(x >>> 8) & 0xff] << 8) |
            SBOX[x & 0xff]) >>>
        0
    );
}

// Linear transformation used in encryption and decryption.
function L1(x) {
    return (x ^ rotl(x, 2) ^ rotl(x, 10) ^ rotl(x, 18) ^ rotl(x, 24)) >>> 0;
}

// Linear transformation used in key expansion.
function L2(x) {
    return (x ^ rotl(x, 13) ^ rotl(x, 23)) >>> 0;
}

function rotl(x, n) {
    const s = n & 31;
    return ((x << s) | (x >>> (32 - s))) >>> 0;
}

let nodeCrypto = null;

if (isNode) {
    const crypto = eval('require')('crypto');

    try {
        // The sm4 algorithm is not supported by every openssl version.
        crypto.createCipheriv('sm4-ecb', Buffer.alloc(BLOCK_SIZE), null);
        nodeCrypto = crypto;
    } catch (e) {
        // Fall back to the javascript implementation.
    }
}
