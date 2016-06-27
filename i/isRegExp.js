/* Check if value is a regular expression.
 *
 * |Name  |Type   |Desc                                 |
 * |------|-------|-------------------------------------|
 * |val   |*      |The value to check                   |
 * |return|boolean|True if value is a regular expression|
 *
 * ```javascript
 * isRegExp(/a/); // -> true
 * ```
 */

_('objToStr');

exports = function (val)
{
    return objToStr(val) === '[object RegExp]';
};