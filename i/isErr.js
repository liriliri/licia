/* Check if value is an error.
 *
 * |Name  |Type   |Desc                     |
 * |----------------------------------------|
 * |val   |*      |The value to check       |
 * |return|boolean|True if value is an error|
 *
 * ```javascript
 * isErr(new Error()); // -> true
 * ```
 */

_('objToStr');

exports = function (val)
{
    return objToStr(val) === '[object Error]';
};