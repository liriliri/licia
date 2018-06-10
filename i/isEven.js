/* Check if number is even.
 * 
 * |Name  |Type   |Desc                  |
 * |------|-------|----------------------|
 * |num   |number |Number to check       |
 * |return|boolean|True if number is even|
 * 
 * ```javascript
 * isOdd(0); // -> true
 * isOdd(1); // -> false
 * isOdd(2); // -> true
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('isInt');

function exports(num) {
    if (!isInt(num)) return false;

    return num % 2 === 0;
}
