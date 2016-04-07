/* Checks if value is classified as a String primitive or object.
 *
 * |Name|Type|Desc|
 * |--------------|
 * |value|*|The value to check|
 * |return|boolean|Returns true if value is correctly classified, else false|
 */

_('objToStr');

isStr = function (val)
{
    return objToStr(val) === '[object String]';
};

