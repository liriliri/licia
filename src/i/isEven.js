/* Check if number is even.
 * 
 * |Name  |Type   |Desc                  |
 * |------|-------|----------------------|
 * |num   |number |Number to check       |
 * |return|boolean|True if number is even|
 */

/* example
 * isOdd(0); // -> true
 * isOdd(1); // -> false
 * isOdd(2); // -> true
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isEven(num: number): boolean;
 */

_('isInt');

exports = function(num) {
    if (!isInt(num)) return false;

    return num % 2 === 0;
};
