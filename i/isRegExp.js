/* Check if value is a regular expression.
 *
 * |Name  |Type   |Desc                                 |
 * |------|-------|-------------------------------------|
 * |val   |*      |Value to check                       |
 * |return|boolean|True if value is a regular expression|
 *
 * ```javascript
 * isRegExp(/a/); // -> true
 * ```
 */

_('objToStr');

function exports(val)
{
    return objToStr(val) === '[object RegExp]';
}