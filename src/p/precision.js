/* Find decimal precision of a given number.
 *
 * |Name  |Type  |Desc           |
 * |------|------|---------------|
 * |num   |number|Number to check|
 * |return|number|Precision      |
 */

/* example
 * precision(1.234); // -> 3;
 */

/* module
 * env: all
 * test: all
 */

function exports(num) {
    num = num.toExponential().match(regExponential);

    var coefficient = num[1],
        exponent = parseInt(num[2], 10);

    var places = (coefficient.split('.')[1] || '').length;

    var ret = places - exponent;

    return ret < 0 ? 0 : ret;
}

var regExponential = /^(-?\d?\.?\d+)e([+-]\d)+/;
