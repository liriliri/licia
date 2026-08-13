/* SHA1 implementation.
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |msg   |Message to encrypt|
 * |return|SHA1 hash         |
 */

/* example
 * sha1('licia'); // -> 'bf29b6b1e26689ce4fbb320df1ee534216b579d5'
 */

/* module
 * env: all
 * since: 1.49.0
 */

/* typescript
 * export declare function sha1(msg: string | number[] | Uint8Array): string;
 */

_('isStr strToBytes hex bytesToWords wordsToBytes isNode isArr');

// https://github.com/emn178/js-sha1
exports = function(msg) {
    if (isStr(msg)) msg = strToBytes(msg);
    const m = bytesToWords(msg);
    const l = msg.length * 8;

    let a = 1732584193;
    let b = -271733879;
    let c = -1732584194;
    let d = 271733878;
    let e = -1009589776;

    m[l >> 5] |= 0x80 << (24 - (l % 32));
    m[(((l + 64) >> 9) << 4) + 15] = l;

    const w = [];

    for (let i = 0; i < m.length; i += 16) {
        const aa = a;
        const bb = b;
        const cc = c;
        const dd = d;
        const ee = e;

        for (let j = 0; j < 80; j++) {
            if (j < 16) {
                w[j] = m[i + j] | 0;
            } else {
                const n = w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16];
                w[j] = (n << 1) | (n >>> 31);
            }

            const t =
                (((a << 5) | (a >>> 27)) +
                    e +
                    (w[j] >>> 0) +
                    (j < 20
                        ? ((b & c) | (~b & d)) + 1518500249
                        : j < 40
                        ? (b ^ c ^ d) + 1859775393
                        : j < 60
                        ? ((b & c) | (b & d) | (c & d)) - 1894007588
                        : (b ^ c ^ d) - 899497514)) |
                0;

            e = d;
            d = c;
            c = (b << 30) | (b >>> 2);
            b = a;
            a = t;
        }

        a = (a + aa) | 0;
        b = (b + bb) | 0;
        c = (c + cc) | 0;
        d = (d + dd) | 0;
        e = (e + ee) | 0;
    }

    return hex.encode(wordsToBytes([a, b, c, d, e]));
};

if (isNode) {
    const crypto = eval('require')('crypto');

    exports = function(msg) {
        if (isArr(msg)) {
            msg = Buffer.from(msg);
        }
        const hash = crypto.createHash('sha1');
        hash.update(msg);
        return hash.digest('hex');
    };
}
