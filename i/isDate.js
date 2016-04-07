/* Checks if value is classified as a Date object.
 *
 * |Name|Type|Desc|
 * |--------------|
 * |val|*|The value to check|
 * |return|boolean|True if value is correctly classified, else false|
 */

_('objToStr');

isDate = function (val)
{
    return objToStr(val) === '[object Date]';
};