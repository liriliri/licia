/* Checks if value is classified as a Integer.
 *
 * |Name|Type|Desc|
 * |--------------|
 * |value|*|The value to check|
 * |return|boolean|Returns true if value is correctly classified, else false|
 */

_('isNum');

isInt = function (val)
{
    return isNum(val) && (val % 1 === 0);
};