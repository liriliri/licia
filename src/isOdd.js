/* Check if number is odd.
 *
 * |Name  |Desc                 |
 * |------|---------------------|
 * |num   |Number to check      |
 * |return|True if number is odd|
 */

/* example
 * isOdd(0); // -> false
 * isOdd(1); // -> true
 * isOdd(2); // -> false
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isOdd(num: number): boolean;
 */

_('isInt');

exports = function(num) {
    if (!isInt(num)) return false;

    return num % 2 !== 0;
};
