/* Check if value is an error.
 *
 * |Name  |Type   |Desc                     |
 * |------|-------|-------------------------|
 * |val   |*      |Value to check           |
 * |return|boolean|True if value is an error|
 *
 * ```javascript
 * isErr(new Error()); // -> true
 * ```
 */

_('objToStr');

function exports(val)
{
    return objToStr(val) === '[object Error]';
}