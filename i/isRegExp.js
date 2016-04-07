/* Check if value is a regular expression.
 *
 * |Name|Type|Desc|
 * |--------------|
 * |value|*|The value to check|
 * |return|boolean|True if value is a regular expression, else false|
 */

_('objToStr');

isRegExp = function (val)
{
    return objToStr(val) === '[object RegExp]';
};