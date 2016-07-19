/* Check if value is a DOM element.
 *
 * |Name  |Type   |Desc                          |
 * |------|-------|------------------------------|
 * |val   |*      |Value to check                |
 * |return|boolean|True if value is a DOM element|
 *
 * ```javascript
 * isEl(document.body); // -> true
 * ```
 */

function exports(val)
{
    return !!(val && val.nodeType === 1);
}