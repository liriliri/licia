/* Variable-length quantity encoding and decoding.
 *
 * ### encode
 *
 * Encode numbers into vlq string.
 *
 * |Name  |Desc            |
 * |------|----------------|
 * |number|Number to encode|
 * |return|Encoded string  |
 *
 * ### decode
 *
 * Decode vlq string into numbers.
 *
 * |Name  |Desc            |
 * |------|----------------|
 * |string|String to decode|
 * |return|Decoded numbers |
 */

/* example
 * vlq.encode(123); // -> '2H'
 * vlq.encode([123, 456, 789]); // -> '2HwcqxB'
 * vlq.decode('2H'); // -> [123]
 * vlq.decode('2HwcqxB'); // -> [123, 456, 789]
 */

/* module
 * env: all
 * test: all
 * since: 1.4.0
 */

/* typescript
 * export declare const vlq: {
 *     encode(number: number | number[]): string;
 *     decode(string: string): number[];
 * };
 */

_('toArr');

// https://github.com/google/closure-compiler/blob/master/src/com/google/debugging/sourcemap/Base64VLQ.java
exports = {
    encode(arr) {
        arr = toArr(arr);
        let ret = '';

        for (let i = 0, len = arr.length; i < len; i++) {
            ret += encode(arr[i]);
        }

        return ret;
    },
    decode(str) {
        const ret = [];

        let i = 0;
        const len = str.length;
        while (i < len) {
            let value = 0;
            let continuation = false;
            let shift = 0;

            do {
                let digit = charToInt[str[i++]];
                continuation = (digit & VLQ_CONTINUATION_BIT) !== 0;
                digit &= VLQ_BASE_MASK;
                value = value + (digit << shift);
                shift = shift + VLQ_BASE_SHIFT;
            } while (continuation);

            ret.push(fromVLQSigned(value));
        }

        return ret;
    }
};

const charToInt = {};
const intToChar = {};
const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
for (let i = 0, len = chars.length; i < len; i++) {
    charToInt[chars[i]] = i;
    intToChar[i] = chars[i];
}

const VLQ_BASE_SHIFT = 5;
const VLQ_BASE = 1 << VLQ_BASE_SHIFT;
const VLQ_BASE_MASK = VLQ_BASE - 1;
const VLQ_CONTINUATION_BIT = VLQ_BASE;

function encode(value) {
    let ret = '';
    value = toVLQSigned(value);

    do {
        let digit = value & VLQ_BASE_MASK;
        value >>>= VLQ_BASE_SHIFT;
        if (value > 0) {
            digit |= VLQ_CONTINUATION_BIT;
        }

        ret += intToChar[digit];
    } while (value > 0);

    return ret;
}

function toVLQSigned(value) {
    if (value < 0) {
        return (-value << 1) + 1;
    } else {
        return (value << 1) + 0;
    }
}

function fromVLQSigned(value) {
    const negate = (value & 1) === 1;
    value = value >> 1;
    return negate ? -value : value;
}
