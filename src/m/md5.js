/* MD5 implementation.
 *
 * |Name   |Type  |Desc              |
 * |-------|------|------------------|
 * |msg    |string|Message to encrypt|
 * |return |string|MD5 hash          |
 */

/* example
 * md5('licia'); // -> 'e59f337d85e9a467f1783fab282a41d0'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function md5(msg: string): string;
 */

_('utf8 strToBytes');

// https://github.com/pvorb/node-md5
exports = function(msg) {
    const bytes = strToBytes(utf8.encode(msg));
    const m = bytesToWords(bytes);
    const l = bytes.length * 8;

    let a = 1732584193;
    let b = -271733879;
    let c = -1732584194;
    let d = 271733878;

    // Swap endian
    for (let i = 0; i < m.length; i++) {
        m[i] =
            (((m[i] << 8) | (m[i] >>> 24)) & 0x00ff00ff) |
            (((m[i] << 24) | (m[i] >>> 8)) & 0xff00ff00);
    }

    // Padding
    m[l >>> 5] |= 0x80 << l % 32;
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    for (let i = 0; i < m.length; i += 16) {
        let aa = a;
        let bb = b;
        let cc = c;
        let dd = d;

        a = FF(a, b, c, d, m[i + 0], 7, -680876936);
        d = FF(d, a, b, c, m[i + 1], 12, -389564586);
        c = FF(c, d, a, b, m[i + 2], 17, 606105819);
        b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
        a = FF(a, b, c, d, m[i + 4], 7, -176418897);
        d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
        c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
        b = FF(b, c, d, a, m[i + 7], 22, -45705983);
        a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
        d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
        c = FF(c, d, a, b, m[i + 10], 17, -42063);
        b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
        a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
        d = FF(d, a, b, c, m[i + 13], 12, -40341101);
        c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
        b = FF(b, c, d, a, m[i + 15], 22, 1236535329);

        a = GG(a, b, c, d, m[i + 1], 5, -165796510);
        d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
        c = GG(c, d, a, b, m[i + 11], 14, 643717713);
        b = GG(b, c, d, a, m[i + 0], 20, -373897302);
        a = GG(a, b, c, d, m[i + 5], 5, -701558691);
        d = GG(d, a, b, c, m[i + 10], 9, 38016083);
        c = GG(c, d, a, b, m[i + 15], 14, -660478335);
        b = GG(b, c, d, a, m[i + 4], 20, -405537848);
        a = GG(a, b, c, d, m[i + 9], 5, 568446438);
        d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
        c = GG(c, d, a, b, m[i + 3], 14, -187363961);
        b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
        a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
        d = GG(d, a, b, c, m[i + 2], 9, -51403784);
        c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
        b = GG(b, c, d, a, m[i + 12], 20, -1926607734);

        a = HH(a, b, c, d, m[i + 5], 4, -378558);
        d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
        c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
        b = HH(b, c, d, a, m[i + 14], 23, -35309556);
        a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
        d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
        c = HH(c, d, a, b, m[i + 7], 16, -155497632);
        b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
        a = HH(a, b, c, d, m[i + 13], 4, 681279174);
        d = HH(d, a, b, c, m[i + 0], 11, -358537222);
        c = HH(c, d, a, b, m[i + 3], 16, -722521979);
        b = HH(b, c, d, a, m[i + 6], 23, 76029189);
        a = HH(a, b, c, d, m[i + 9], 4, -640364487);
        d = HH(d, a, b, c, m[i + 12], 11, -421815835);
        c = HH(c, d, a, b, m[i + 15], 16, 530742520);
        b = HH(b, c, d, a, m[i + 2], 23, -995338651);

        a = II(a, b, c, d, m[i + 0], 6, -198630844);
        d = II(d, a, b, c, m[i + 7], 10, 1126891415);
        c = II(c, d, a, b, m[i + 14], 15, -1416354905);
        b = II(b, c, d, a, m[i + 5], 21, -57434055);
        a = II(a, b, c, d, m[i + 12], 6, 1700485571);
        d = II(d, a, b, c, m[i + 3], 10, -1894986606);
        c = II(c, d, a, b, m[i + 10], 15, -1051523);
        b = II(b, c, d, a, m[i + 1], 21, -2054922799);
        a = II(a, b, c, d, m[i + 8], 6, 1873313359);
        d = II(d, a, b, c, m[i + 15], 10, -30611744);
        c = II(c, d, a, b, m[i + 6], 15, -1560198380);
        b = II(b, c, d, a, m[i + 13], 21, 1309151649);
        a = II(a, b, c, d, m[i + 4], 6, -145523070);
        d = II(d, a, b, c, m[i + 11], 10, -1120210379);
        c = II(c, d, a, b, m[i + 2], 15, 718787259);
        b = II(b, c, d, a, m[i + 9], 21, -343485551);

        a = (a + aa) >>> 0;
        b = (b + bb) >>> 0;
        c = (c + cc) >>> 0;
        d = (d + dd) >>> 0;
    }

    return bytesToHex(wordsToBytes(endian([a, b, c, d])));
};

function FF(a, b, c, d, x, s, t) {
    let n = a + ((b & c) | (~b & d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
}

function GG(a, b, c, d, x, s, t) {
    let n = a + ((b & d) | (c & ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
}

function HH(a, b, c, d, x, s, t) {
    let n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
}

function II(a, b, c, d, x, s, t) {
    let n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
}

function wordsToBytes(words) {
    const bytes = [];

    for (let b = 0, len = words.length * 32; b < len; b += 8) {
        bytes.push((words[b >>> 5] >>> (24 - (b % 32))) & 0xff);
    }

    return bytes;
}

function bytesToHex(bytes) {
    const hex = [];
    for (let i = 0, len = bytes.length; i < len; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xf).toString(16));
    }
    return hex.join('');
}

function endian(n) {
    if (n.constructor == Number) {
        return (rotl(n, 8) & 0x00ff00ff) | (rotl(n, 24) & 0xff00ff00);
    }

    for (let i = 0; i < n.length; i++) n[i] = endian(n[i]);
    return n;
}

function rotl(n, b) {
    return (n << b) | (n >>> (32 - b));
}

function bytesToWords(bytes) {
    const words = [];

    for (let i = 0, b = 0, len = bytes.length; i < len; i++, b += 8) {
        words[b >>> 5] |= bytes[i] << (24 - (b % 32));
    }

    return words;
}
