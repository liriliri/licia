/* Check if the provided integer is a prime number.
 *
 * |Name  |Type   |Desc                            |
 * |------|-------|--------------------------------|
 * |num   |number |Number to check                 |
 * |return|boolean|True if number is a prime number|
 */

/* example
 * isPrime(11); // -> true
 * isPrime(8); // -> false
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isPrime(num: number): boolean
 */

exports = function(num) {
    const boundary = Math.floor(Math.sqrt(num));

    for (let i = 2; i <= boundary; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return num >= 2;
};
