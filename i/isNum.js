/* Checks if value is classified as a Number primitive or object.
 *
 * |Name|Type|Desc|
 * |--------------|
 * |value|*|The value to check|
 * |return|boolean|True if value is correctly classified, else false|
 */

_('objToStr');

exports = function (val)
{
    return objToStr(val) === '[object Number]';
};