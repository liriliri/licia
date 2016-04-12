/* Check if value is a boolean primitive.
 *
 * |Name  |Type   |Desc                      |
 * |-----------------------------------------|
 * |val   |*      |The value to check        |
 * |return|boolean|True if value is a boolean|
 *
 * ```javascript
 * isBool(true); // -> true
 * isBool(false); // -> true
 * isBool(1); // -> false
 * ```
 */

isBool = function (val)
{
    return val === true || val === false;
};