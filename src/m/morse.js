/* Morse code encoding and decoding.
 *
 * ### encode
 *
 * Turn text into Morse code.
 *
 * |Name  |Desc          |
 * |------|--------------|
 * |txt   |Text to encode|
 * |return|Morse code    |
 *
 * ### decode
 *
 * Decode Morse code into text.
 *
 * |Name  |Desc          |
 * |------|--------------|
 * |morse |Morse code    |
 * |return|Decoded string|
 */

/* example
 * const str = morse.encode('Hello, world.');
 * // -> '.... . .-.. .-.. --- --..-- ....... .-- --- .-. .-.. -.. .-.-.-'
 * morse.decode(str); // -> 'Hello, world.'
 */

/* module
 * env: all
 */

/* typescript
 * export declare const morse: {
 *     encode(txt: string): string;
 *     decode(morse: string): string;
 * }
 */

_('upperCase invert');

exports = {
    encode(txt) {
        const len = txt.length;
        const ret = Array(len);
        for (let i = 0; i < len; i++) {
            const c = upperCase(txt[i]);
            ret[i] = map[c] || '?';
        }

        return ret.join(' ');
    },
    decode(morse) {
        const ret = morse.split(' ');
        for (let i = 0, len = ret.length; i < len; i++) {
            ret[i] = decodeMap[ret[i]] || ' ';
        }

        return ret.join('');
    }
};

// copied from http://freenet.msp.mn.us/people/calguire/morse.html
const map = {
    A: '.-',
    B: '-...',
    C: '-.-.',
    D: '-..',
    E: '.',
    F: '..-.',
    G: '--.',
    H: '....',
    I: '..',
    J: '.---',
    K: '-.-',
    L: '.-..',
    M: '--',
    N: '-.',
    O: '---',
    P: '.--.',
    Q: '--.-',
    R: '.-.',
    S: '...',
    T: '-',
    U: '..-',
    V: '...-',
    W: '.--',
    X: '-..-',
    Y: '-.--',
    Z: '--..',
    Á: '.--.-',
    Ä: '.-.-',
    É: '..-..',
    Ñ: '--.--',
    Ö: '---.',
    Ü: '..--',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
    ',': '--..--',
    '.': '.-.-.-',
    '?': '..--..',
    ';': '-.-.-',
    ':': '---...',
    '/': '-..-.',
    '-': '-....-',
    "'": '.----.',
    '()': '-.--.-',
    _: '..--.-',
    '@': '.--.-.',
    ' ': '.......'
};

const decodeMap = invert(map);
