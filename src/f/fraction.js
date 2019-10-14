/* Convert number to fraction.
 *
 * |Name  |Type  |Desc                  |
 * |------|------|----------------------|
 * |num   |number|Number to convert     |
 * |return|string|Corresponding fraction|
 */

/* example
 * fraction(1.2); // -> '6/5'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function fraction(num: number): string;
 */

_('gcd precision');

exports = function(num) {
    if (num === 0) return '0';

    let _precision = precision(num);
    _precision = pow(10, _precision);

    let numerator = num * _precision,
        denominator = _precision;

    const _gcd = abs(gcd(numerator, denominator));
    numerator /= _gcd;
    denominator /= _gcd;

    return numerator + '/' + denominator;
};

const abs = Math.abs;
const pow = Math.pow;
