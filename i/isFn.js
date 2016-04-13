/* Check if value is a function.
 *
 * |Name  |Type   |Desc                       |
 * |------------------------------------------|
 * |val   |*      |The value to check         |
 * |return|boolean|True if value is a function|
 *
 * ```javascript
 * isFn(function() {}); // -> true
 * ```
 */

_('objToStr');

isFn = function (val)
{
    return objToStr(val) === '[object Function]';
};