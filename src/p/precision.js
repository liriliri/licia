/* Find decimal precision of a given number.
 *
 * |Name  |Desc           |
 * |------|---------------|
 * |num   |Number to check|
 * |return|Precision      |
 */

/* example
 * precision(1.234); // -> 3;
 */

/* module
 * env: all
 */

/* typescript
 * export declare function precision(num: number): number;
 */

exports = function(num) {
    num = num.toExponential().match(regExponential);

    const coefficient = num[1];
    const exponent = parseInt(num[2], 10);

    const places = (coefficient.split('.')[1] || '').length;

    const ret = places - exponent;

    return ret < 0 ? 0 : ret;
};

const regExponential = /^(-?\d?\.?\d+)e([+-]\d)+/;
