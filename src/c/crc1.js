/* CRC1 implementation.
 *
 * |Name      |Type        |Desc                |
 * |----------|------------|--------------------|
 * |input     |string array|Data to calculate   |
 * |[previous]|number      |Previous CRC1 result|
 * |return    |number      |CRC1 result         |
 */

/* example
 * crc1('1234567890').toString(16); // -> 'd'
 */

/* module
 * env: all
 * test: all
 * since: 1.5.7
 */

/* typescript
 * export declare function crc1(
 *     input: string | number[],
 *     previous?: number
 * ): number;
 */

_('isStr strToBytes');

// https://github.com/alexgorbatchev/node-crc
exports = function(input, previous) {
    return exports.signed(input, previous) >>> 0;
};

exports.signed = function(input, previous) {
    if (isStr(input)) input = strToBytes(input);

    let crc = ~~previous;
    let accum = 0;

    for (let i = 0, len = input.length; i < len; i++) {
        const byte = input[i];
        accum += byte;
    }
    crc += accum % 256;

    return crc % 256;
};
