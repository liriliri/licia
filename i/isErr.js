/* Checks if value is an Error.
 *
 * |Name|Type|Desc|
 * |--------------|
 * |value|*|The value to check|
 * |return|boolean|True if value is an error object, else false|
 */

_('objToStr');

isErr = function (val)
{
    return objToStr(val) === '[object Error]';
};