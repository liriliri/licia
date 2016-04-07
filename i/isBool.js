/* Checks if value is classified as a boolean primitive or object.
 *
 * |Name|Type|Desc|
 * |--------------|
 * |value|*|The value to check|
 * |return|boolean|Returns true if value is correctly classified, else false|
 */

isBool = function (val)
{
    return val === true || val === false;
};