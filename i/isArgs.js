/* Checks if value is classified as an arguments object.
 *
 * |Name|Type|Desc|
 * |--------------|
 * |value|*|The value to check|
 * |return|boolean|True if value is correctly classified, else false|
 */

_('objToStr');

exports = function (val)
{
    return objToStr(val) === '[object Arguments]';
};