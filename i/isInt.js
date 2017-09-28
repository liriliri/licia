/* Checks if value is classified as a Integer.
 *
 * |Name  |Type   |Desc                                 |
 * |------|-------|-------------------------------------|
 * |value |*      |Value to check                       |
 * |return|boolean|True if value is correctly classified|
 * 
 * ```javascript
 * isInt(5); // -> true
 * isInt(5.1); // -> false
 * isInt({}); // -> false
 * ```
 */

_('isNum');

function exports(val)
{
    return isNum(val) && (val % 1 === 0);
}