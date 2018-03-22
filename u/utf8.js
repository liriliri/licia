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
 * |Name  |Type  |Desc            |
 * |------|------|----------------|
 * |str   |string|String to decode|
 * |return|string|Decoded string  |
 * 
 * Turn any UTF-8 encoded string into UTF-8 decoded string.
 * 
 * ```javascript
 * utf8.encode('\uD800\uDC00'); // ->  '\xF0\x90\x80\x80'
 * utf8.decode('\xF0\x90\x80\x80'); // -> '\uD800\uDC00'
 * ```
 */

/* module
 * env: all
 * test: all
 */ 

_('ucs2');

// https://encoding.spec.whatwg.org/#utf-8
exports = {
    encode: function (str) 
    {
        var codePoints = ucs2.decode(str);

        var byteArr = '';

        for (var i = 0, len = codePoints.length; i < len; i++) 
        {
            byteArr += encodeCodePoint(codePoints[i]);
        }

        return byteArr;
    },
    decode: function decode(str)
    {
        byteArr = ucs2.decode(str);
        byteIdx = 0; 
        byteCount = byteArr.length;
        codePoint = 0;
        bytesSeen = 0;
        bytesNeeded = 0;
        lowerBoundary = 0x80;
        upperBoundary = 0xBF;
    
        var codePoints = [];
    
        var tmp;
    
        while((tmp = decodeCodePoint()) !== false) 
        {
            codePoints.push(tmp);
        }
    
        return ucs2.encode(codePoints);
    }
};

var fromCharCode = String.fromCharCode;

function encodeCodePoint(codePoint) 
{
    // U+0000 to U+0080, ASCII code point
    if ((codePoint & 0xFFFFFF80) === 0) 
    {
        return fromCharCode(codePoint);
    }

    var ret = '',
        count,
        offset;

    // U+0080 to U+07FF, inclusive
    if ((codePoint & 0xFFFFF800) === 0) 
    {
        count = 1;
        offset = 0xC0;
    } else if ((codePoint & 0xFFFF0000) === 0)
    {
        // U+0800 to U+FFFF, inclusive
        count = 2;
        offset = 0xE0;
    } else if ((codePoint & 0xFFE00000) == 0) 
    {
        // U+10000 to U+10FFFF, inclusive
        count = 3;
        offset = 0xF0;
    }

    ret += fromCharCode((codePoint >> (6 * count)) + offset);

    while (count > 0) 
    {
        var tmp = codePoint >> (6 * (count - 1));
        ret += fromCharCode(0x80 | tmp & 0x3F);
        count--;
    }

    return ret;
}

var byteArr,
    byteIdx, 
    byteCount, 
    codePoint,
    bytesSeen,
    bytesNeeded,
    lowerBoundary,
    upperBoundary;

function decodeCodePoint() 
{
    /* eslint-disable no-constant-condition */
    while (true) 
    {
        if (byteIdx >= byteCount && bytesNeeded) throw new Error('Invalid byte index');

        if (byteIdx === byteCount) return false;

        var byte = byteArr[byteIdx];
        byteIdx++;

        if (!bytesNeeded) 
        {
            // 0x00 to 0x7F
            if ((byte & 0x80) === 0) 
            {
                return byte;
            }
            // 0xC2 to 0xDF
            if ((byte & 0xE0) === 0xC0) 
            {
                bytesNeeded = 1;
                codePoint = byte & 0x1F;
            } else if ((byte & 0xF0) === 0xE0) 
            {
                // 0xE0 to 0xEF
                if (byte === 0xE0) lowerBoundary = 0xA0;
                if (byte === 0xED) upperBoundary = 0x9F;
                bytesNeeded = 2;
                codePoint = byte & 0xF;
            } else if ((byte & 0xF8) === 0xF0) 
            {
                // 0xF0 to 0xF4
                if (byte === 0xF0) lowerBoundary = 0x90;
                if (byte === 0xF4) upperBoundary = 0x8F;
                bytesNeeded = 3;
                codePoint = byte & 0x7;
            } else 
            {
                throw new Error('Invalid UTF-8 detected');
            }

            continue;
        }

        if (byte < lowerBoundary || byte > upperBoundary) 
        {
            codePoint = 0;
            bytesNeeded = 0;
            bytesSeen = 0;
            lowerBoundary = 0x80;
            upperBoundary = 0xBF;
            byteIdx--;
            throw new Error('Invalid continuation byte');
        }

        lowerBoundary = 0x80;
        upperBoundary = 0xBF;

        codePoint = (codePoint << 6) | (byte & 0x3F);

        bytesSeen++;

        if (bytesSeen !== bytesNeeded) continue;
        
        var tmp = codePoint;

        codePoint = 0;
        bytesNeeded = 0;
        bytesSeen = 0;

        return tmp;
    }
}