/* Compute the greatest common divisor using Euclid's algorithm.
 *
 * |Name  |Desc                   |
 * |------|-----------------------|
 * |a     |Number to calculate    |
 * |b     |Number to calculate    |
 * |return|Greatest common divisor|
 */

/* example
 * gcd(121, 44); // -> 11
 */

/* module
 * env: all
 */

/* typescript
 * export declare function gcd(a: number, b: number): number;
 */

exports = function(a, b) {
    if (b === 0) return a;
    return exports(b, a % b);
};
