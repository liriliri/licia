/* Check if value is a function.
 *
 * |Name|Type|Desc|
 * |--------------|
 * |value|*|The value to check|
 * |return|boolean|True if value is a function, else false|
 */

_('objToStr');

isFn = function (val)
{
    return objToStr(val) === '[object Function]';
};