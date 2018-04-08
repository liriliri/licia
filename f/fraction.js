/* Convert number to fraction.
 *
 * |Name  |Type  |Desc                  |
 * |------|------|----------------------|
 * |num   |number|Number to convert     |
 * |return|string|Corresponding fraction|
 * 
 * ```javascript
 * fraction(1.2); // -> '6/5' 
 * ```
 */

/* module
 * env: all
 * test: all
 */ 

_('gcd precision');

function exports(num) 
{
    if (num === 0) return '0';

    var _precision = precision(num);
    _precision = pow(10, _precision);
    
    var numerator = num * _precision,
        denominator = _precision;

    var _gcd = abs(gcd(numerator, denominator));
    numerator /= _gcd;
    denominator /= _gcd;
    
    return numerator + '/' + denominator;
}

var abs = Math.abs,
    pow = Math.pow;