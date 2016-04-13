/* Check if value is an NaN.
 *
 * |Name  |Type   |Desc                   |
 * |--------------------------------------|
 * |val   |*      |The value to check     |
 * |return|boolean|True if value is an NaN|
 *
 * Undefined is not an NaN, different from global isNaN function.
 *
 * ```javascript
 * isNaN(0); // -> false
 * isNaN(NaN); // -> true
 * ```
 */

_('isNum');

isNaN = function (val)
{
    return isNum(val) && val !== +val;
};