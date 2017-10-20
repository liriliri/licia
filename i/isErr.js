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

/* module
 * env: all
 * test: all
 */

_('objToStr');

function exports(val)
{
    return objToStr(val) === '[object Error]';
}