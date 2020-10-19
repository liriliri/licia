/* Check if number is even.
 *
 * |Name  |Desc                  |
 * |------|----------------------|
 * |num   |Number to check       |
 * |return|True if number is even|
 */

/* example
 * isEven(0); // -> true
 * isEven(1); // -> false
 * isEven(2); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isEven(num: number): boolean;
 */

_('isInt');

exports = function(num) {
    if (!isInt(num)) return false;

    return num % 2 === 0;
};
