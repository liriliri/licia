/* Check if number is odd.
 * 
 * |Name  |Type   |Desc                 |
 * |------|-------|---------------------|
 * |num   |number |Number to check      |
 * |return|boolean|True if number is odd|
 * 
 * ```javascript
 * isOdd(0); // -> false
 * isOdd(1); // -> true
 * isOdd(2); // -> false
 * ```
 */

/* module
 * env: all
 * test: all
 */ 

_('isInt');

function exports(num) 
{
    if (!isInt(num)) return false;

    return num % 2 !== 0;
}