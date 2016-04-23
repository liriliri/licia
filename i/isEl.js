/* Check if value is a DOM element.
 *
 * |Name  |Type   |Desc                          |
 * |---------------------------------------------|
 * |val   |*      |Value to check                |
 * |return|boolean|True if value is a DOM element|
 *
 * ```javascript
 * isEl(document.body); // -> true
 * ```
 */

exports = function (val)
{
    return !!(val && val.nodeType === 1);
};