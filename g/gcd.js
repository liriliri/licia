/* Compute the greatest common divisor using Euclid's algorithm.
 * 
 * |Name  |Type  |Desc                   |
 * |------|------|-----------------------|
 * |a     |number|Number to calculate    |
 * |b     |number|Number to calculate    |
 * |return|number|Greatest common divisor|
 */

/* example
 * gcd(121, 44); // -> 11
 */

/* module
 * env: all
 * test: all
 */

function exports(a, b) {
    if (b === 0) return a;
    return exports(b, a % b);
}
