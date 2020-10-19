/* RC4 symmetric encryption implementation.
 *
 * ### encrypt
 *
 * RC4 encryption, result as base64 string.
 *
 * ### decrypt
 *
 * RC4 decryption, pass base64 string as input.
 *
 * |Name  |Desc                            |
 * |------|--------------------------------|
 * |key   |Secret key                      |
 * |str   |String to be encrypted/decrypted|
 * |return|Encrypted/decrypted string      |
 */

/* example
 * rc4.encrypt('licia', 'Hello world'); // -> 'j9y2VpSfR3AdNN8='
 * rc4.decrypt('licia', 'j9y2VpSfR3AdNN8='); // -> 'Hello world'
 */

/* module
 * env: all
 * since: 1.1.0
 */

/* typescript
 * export declare const rc4: {
 *     encrypt(key: string, str: string): string;
 *     decrypt(key: string, str: string): string;
 * };
 */

_('base64 bytesToStr strToBytes');

exports = {
    encrypt(key, str) {
        return rc4(key, str, false);
    },
    decrypt(key, str) {
        return rc4(key, str, true);
    }
};

function rc4(key, str, decrypt) {
    key = strToBytes(key);
    if (!decrypt) {
        str = strToBytes(str);
    } else {
        str = base64.decode(str);
    }

    const result = [];
    const s = [];
    let j = 0;
    let i = 0;
    let x;

    for (i = 0; i < 256; i++) {
        s[i] = i;
    }
    for (i = 0; i < 256; i++) {
        j = (j + s[i] + key[i % key.length]) % 256;
        x = s[i];
        s[i] = s[j];
        s[j] = x;
    }
    i = 0;
    j = 0;
    for (let y = 0, len = str.length; y < len; y++) {
        i = (i + 1) % 256;
        j = (j + s[i]) % 256;
        x = s[i];
        s[i] = s[j];
        s[j] = x;
        result.push(str[y] ^ s[(s[i] + s[j]) % 256]);
    }

    return !decrypt ? base64.encode(result) : bytesToStr(result);
}
