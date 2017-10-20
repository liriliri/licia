/* Basic base64 encoding and decoding.
 *
 * ### encode
 *
 * Turn a byte array into a base64 string.
 *
 * |Name  |Type  |Desc         |
 * |------|------|-------------|
 * |arr   |array |Byte array   |
 * |return|string|Base64 string|
 *
 * ```javascript
 * base64.encode([168, 174, 155, 255]); // -> 'qK6b/w=='
 * ```
 *
 * ### decode
 *
 * Turn a base64 string into a byte array.
 *
 * |Name  |Type  |Desc         |
 * |------|------|-------------|
 * |str   |string|Base64 string|
 * |return|array |Byte array   |
 *
 * ```javascript
 * base64.decode('qK6b/w=='); // -> [168, 174, 155, 255]
 * ```
 */

/* module
 * env: all
 * test: all
 */

exports = {
    encode: function (arr)
    {
        var ret = [],
            len = arr.length,
            remain = len % 3;

        len = len - remain;

        for (var i = 0; i < len; i += 3)
        {
            ret.push(numToBase64((arr[i] << 16) + (arr[i + 1] << 8) + arr[i + 2]));
        }

        len = arr.length;
        var tmp;

        if (remain === 1)
        {
            tmp = arr[len - 1];
            ret.push(code[tmp >> 2]);
            ret.push(code[(tmp << 4) & 0x3F]);
            ret.push('==');
        } else if (remain === 2)
        {
            tmp = (arr[len - 2] << 8) + (arr[len - 1]);
            ret.push(code[tmp >> 10]);
            ret.push(code[(tmp >> 4) & 0x3F]);
            ret.push(code[(tmp << 2) & 0x3F]);
            ret.push('=');
        }

        return ret.join('');
    },
    decode: function (str)
    {
        var len = str.length,
            remain = 0;

        if (str[len - 2] === '=') remain = 2;
        else if (str[len - 1] === '=') remain = 1;

        var ret = new Array(len * 3 / 4 - remain);

        len = remain > 0 ? len - 4 : len;

        for (var i = 0, j = 0; i < len; i += 4)
        {
            var num = base64ToNum(str[i], str[i+1], str[i+2], str[i+3]);
            ret[j++] = ((num >> 16) & 0xFF);
            ret[j++] = ((num >> 8) & 0xFF);
            ret[j++] = (num & 0xFF);
        }

        var tmp;

        if (remain === 2)
        {
            tmp = (codeMap[str.charCodeAt(i)] << 2) |
                  (codeMap[str.charCodeAt(i + 1)] >> 4);
            ret[j++] = (tmp & 0xFF);
        } else if (remain === 1)
        {
            tmp = (codeMap[str.charCodeAt(i)] << 10) |
                  (codeMap[str.charCodeAt(i + 1)] << 4) |
                  (codeMap[str.charCodeAt(i + 2)] >> 2);
            ret[j++] = ((tmp >> 8) & 0xFF);
            ret[j++] = tmp & 0xFF;
        }

        return ret;
    }
};

var codeMap = [],
    code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; i++)
{
    codeMap[code.charCodeAt(i)] = i;
}

function numToBase64(num)
{
    return code[num >> 18 & 0x3F] +
           code[num >> 12 & 0x3F] +
           code[num >> 6 & 0x3F] +
           code[num & 0x3F];
}

function base64ToNum(str1, str2, str3, str4)
{
    return (codeMap[str1.charCodeAt(0)] << 18) |
           (codeMap[str2.charCodeAt(0)] << 12) |
           (codeMap[str3.charCodeAt(0)] << 6) |
           codeMap[str4.charCodeAt(0)];
}
