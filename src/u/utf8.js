/* UTF-8 encoding and decoding.
 *
 * ### encode
 *
 * Turn any UTF-8 decoded string into UTF-8 encoded string.
 *
 * |Name  |Type  |Desc            |
 * |------|------|----------------|
 * |str   |string|String to encode|
 * |return|string|Encoded string  |
 *
 * ### decode
 *
 * Turn any UTF-8 encoded string into UTF-8 decoded string.
 *
 * |Name      |Type   |Desc                  |
 * |----------|-------|----------------------|
 * |str       |string |String to decode      |
 * |safe=false|boolean|Suppress error if true|
 * |return    |string |Decoded string        |
 */

/* example
 * utf8.encode('\uD800\uDC00'); // ->  '\xF0\x90\x80\x80'
 * utf8.decode('\xF0\x90\x80\x80'); // -> '\uD800\uDC00'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare const utf8: {
 *     encode(str: string): string;
 *     decode(str: string, safe?: boolean): string;
 * };
 */

_('ucs2');

// https://encoding.spec.whatwg.org/#utf-8
exports = {
    encode: function(str) {
        const codePoints = ucs2.decode(str);

        let byteArr = '';

        for (let i = 0, len = codePoints.length; i < len; i++) {
            byteArr += encodeCodePoint(codePoints[i]);
        }

        return byteArr;
    },
    decode: function decode(str, safe) {
        byteArr = ucs2.decode(str);
        byteIdx = 0;
        byteCount = byteArr.length;
        codePoint = 0;
        bytesSeen = 0;
        bytesNeeded = 0;
        lowerBoundary = 0x80;
        upperBoundary = 0xbf;

        const codePoints = [];

        let tmp;

        while ((tmp = decodeCodePoint(safe)) !== false) {
            codePoints.push(tmp);
        }

        return ucs2.encode(codePoints);
    }
};

const fromCharCode = String.fromCharCode;

function encodeCodePoint(codePoint) {
    // U+0000 to U+0080, ASCII code point
    if ((codePoint & 0xffffff80) === 0) {
        return fromCharCode(codePoint);
    }

    let ret = '',
        count,
        offset;

    // U+0080 to U+07FF, inclusive
    if ((codePoint & 0xfffff800) === 0) {
        count = 1;
        offset = 0xc0;
    } else if ((codePoint & 0xffff0000) === 0) {
        // U+0800 to U+FFFF, inclusive
        count = 2;
        offset = 0xe0;
    } else if ((codePoint & 0xffe00000) == 0) {
        // U+10000 to U+10FFFF, inclusive
        count = 3;
        offset = 0xf0;
    }

    ret += fromCharCode((codePoint >> (6 * count)) + offset);

    while (count > 0) {
        const tmp = codePoint >> (6 * (count - 1));
        ret += fromCharCode(0x80 | (tmp & 0x3f));
        count--;
    }

    return ret;
}

let byteArr,
    byteIdx,
    byteCount,
    codePoint,
    bytesSeen,
    bytesNeeded,
    lowerBoundary,
    upperBoundary;

function decodeCodePoint(safe) {
    /* eslint-disable no-constant-condition */
    while (true) {
        if (byteIdx >= byteCount && bytesNeeded) {
            if (safe) return goBack();
            throw new Error('Invalid byte index');
        }

        if (byteIdx === byteCount) return false;

        const byte = byteArr[byteIdx];
        byteIdx++;

        if (!bytesNeeded) {
            // 0x00 to 0x7F
            if ((byte & 0x80) === 0) {
                return byte;
            }
            // 0xC2 to 0xDF
            if ((byte & 0xe0) === 0xc0) {
                bytesNeeded = 1;
                codePoint = byte & 0x1f;
            } else if ((byte & 0xf0) === 0xe0) {
                // 0xE0 to 0xEF
                if (byte === 0xe0) lowerBoundary = 0xa0;
                if (byte === 0xed) upperBoundary = 0x9f;
                bytesNeeded = 2;
                codePoint = byte & 0xf;
            } else if ((byte & 0xf8) === 0xf0) {
                // 0xF0 to 0xF4
                if (byte === 0xf0) lowerBoundary = 0x90;
                if (byte === 0xf4) upperBoundary = 0x8f;
                bytesNeeded = 3;
                codePoint = byte & 0x7;
            } else {
                if (safe) return goBack();
                throw new Error('Invalid UTF-8 detected');
            }

            continue;
        }

        if (byte < lowerBoundary || byte > upperBoundary) {
            if (safe) {
                byteIdx--;
                return goBack();
            }
            throw new Error('Invalid continuation byte');
        }

        lowerBoundary = 0x80;
        upperBoundary = 0xbf;

        codePoint = (codePoint << 6) | (byte & 0x3f);

        bytesSeen++;

        if (bytesSeen !== bytesNeeded) continue;

        const tmp = codePoint;

        codePoint = 0;
        bytesNeeded = 0;
        bytesSeen = 0;

        return tmp;
    }
}

function goBack() {
    const start = byteIdx - bytesSeen - 1;
    byteIdx = start + 1;
    codePoint = 0;
    bytesNeeded = 0;
    bytesSeen = 0;
    lowerBoundary = 0x80;
    upperBoundary = 0xbf;

    return byteArr[start];
}
