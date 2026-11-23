/* SM3 implementation.
 *
 * |Name   |Desc                                |
 * |-------|------------------------------------|
 * |msg    |Message to encrypt                  |
 * |options|Options, `mode` is `hmac` by default|
 * |return |SM3 hash                            |
 *
 * ### Options
 *
 * |Name|Desc                                       |
 * |----|-------------------------------------------|
 * |mode|Hash mode, only `hmac` is supported        |
 * |key |HMAC key, string is treated as a hex string|
 */

/* example
 * sm3('licia'); // -> '33b901397725075d898a5508b2f0f3c3016d280a8c1658b7d172ba258cdfb150'
 */

/* module
 * env: all
 * since: 1.50.0
 */

/* typescript
 * export declare function sm3(
 *     msg: string | number[] | Uint8Array,
 *     options?: {
 *         mode?: string;
 *         key: string | number[] | Uint8Array;
 *     }
 * ): string;
 */

_(
    'isStr isArr isTypedArr strToBytes hex bytesToWords wordsToBytes isNode mergeArr'
);

const BLOCK_SIZE = 64;

const IV = [
    0x7380166f,
    0x4914b2b9,
    0x172442d7,
    0xda8a0600,
    0xa96f30bc,
    0x163138aa,
    0xe38dee4d,
    0xb0fb0e4e
];

exports = function(msg, options) {
    const bytes = toBytes(msg);

    if (!options) {
        return nodeCrypto ? nodeHash(bytes) : hex.encode(digest(bytes));
    }

    const mode = options.mode || 'hmac';
    if (mode !== 'hmac') throw new Error('Invalid mode: ' + mode);
    if (options.key === undefined || options.key === null) {
        throw new Error('Invalid key');
    }

    const key = toBytes(options.key, true);

    return nodeCrypto ? nodeHmac(bytes, key) : hex.encode(hmac(bytes, key));
};

function toBytes(input, hexString) {
    if (isStr(input)) return strToBytes(input, hexString ? 'hex' : 'utf8');
    if (!isArr(input) && !isTypedArr(input)) throw new Error('Invalid input');
    return Array.prototype.slice.call(input);
}

function digest(bytes) {
    const bitLen = bytes.length * 8;
    const msg = bytes.slice();
    msg.push(0x80);
    while (msg.length % BLOCK_SIZE !== BLOCK_SIZE - 8) msg.push(0);
    mergeArr(
        msg,
        wordsToBytes([Math.floor(bitLen / 0x100000000), bitLen >>> 0])
    );

    const words = bytesToWords(msg);
    const v = IV.slice();
    const w = new Array(68);
    const m = new Array(64);

    for (let i = 0; i < words.length; i += 16) {
        for (let j = 0; j < 16; j++) {
            w[j] = words[i + j] >>> 0;
        }
        for (let j = 16; j < 68; j++) {
            w[j] =
                (P1(w[j - 16] ^ w[j - 9] ^ rotl(w[j - 3], 15)) ^
                    rotl(w[j - 13], 7) ^
                    w[j - 6]) >>>
                0;
        }
        for (let j = 0; j < 64; j++) {
            m[j] = (w[j] ^ w[j + 4]) >>> 0;
        }

        let a = v[0];
        let b = v[1];
        let c = v[2];
        let d = v[3];
        let e = v[4];
        let f = v[5];
        let g = v[6];
        let h = v[7];

        for (let j = 0; j < 64; j++) {
            const t = j < 16 ? 0x79cc4519 : 0x7a879d8a;
            const ss1 = rotl((rotl(a, 12) + e + rotl(t, j)) >>> 0, 7);
            const ss2 = (ss1 ^ rotl(a, 12)) >>> 0;
            const ff = j < 16 ? a ^ b ^ c : (a & b) | (a & c) | (b & c);
            const gg = j < 16 ? e ^ f ^ g : (e & f) | (~e & g);
            const tt1 = (ff + d + ss2 + m[j]) >>> 0;
            const tt2 = (gg + h + ss1 + w[j]) >>> 0;

            d = c;
            c = rotl(b, 9);
            b = a;
            a = tt1;
            h = g;
            g = rotl(f, 19);
            f = e;
            e = P0(tt2);
        }

        v[0] = (v[0] ^ a) >>> 0;
        v[1] = (v[1] ^ b) >>> 0;
        v[2] = (v[2] ^ c) >>> 0;
        v[3] = (v[3] ^ d) >>> 0;
        v[4] = (v[4] ^ e) >>> 0;
        v[5] = (v[5] ^ f) >>> 0;
        v[6] = (v[6] ^ g) >>> 0;
        v[7] = (v[7] ^ h) >>> 0;
    }

    return wordsToBytes(v);
}

function hmac(bytes, key) {
    let k = key;
    if (k.length > BLOCK_SIZE) k = digest(k);

    const ipad = [];
    const opad = [];
    for (let i = 0; i < BLOCK_SIZE; i++) {
        const byte = i < k.length ? k[i] : 0;
        ipad.push(byte ^ 0x36);
        opad.push(byte ^ 0x5c);
    }

    return digest(opad.concat(digest(ipad.concat(bytes))));
}

function nodeHash(bytes) {
    return nodeCrypto
        .createHash('sm3')
        .update(Buffer.from(bytes))
        .digest('hex');
}

function nodeHmac(bytes, key) {
    return nodeCrypto
        .createHmac('sm3', Buffer.from(key))
        .update(Buffer.from(bytes))
        .digest('hex');
}

function P0(x) {
    return (x ^ rotl(x, 9) ^ rotl(x, 17)) >>> 0;
}

function P1(x) {
    return (x ^ rotl(x, 15) ^ rotl(x, 23)) >>> 0;
}

function rotl(x, n) {
    const s = n & 31;
    return ((x << s) | (x >>> (32 - s))) >>> 0;
}

let nodeCrypto = null;

if (isNode) {
    const crypto = eval('require')('crypto');

    try {
        // The sm3 algorithm is not supported by every openssl version.
        crypto.createHash('sm3');
        crypto.createHmac('sm3', 'licia');
        nodeCrypto = crypto;
    } catch (e) {
        // Fall back to the javascript implementation.
    }
}
