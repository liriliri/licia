/* Check if value is an array.
 *
 * |Name|Type|Desc|
 * |--------------|
 * |value|*|The value to check|
 * |return|boolean|True if value is an array, else false|
 */

_('objToStr');

isArr = Array.isArray || function (val)
{
    return objToStr(val) === '[object Array]';
};