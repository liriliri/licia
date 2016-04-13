/* Check if value is undefined.
 *
 * |Name  |Type   |Desc                      |
 * |-----------------------------------------|
 * |val   |*      |The value to check        |
 * |return|boolean|True if value is undefined|
 *
 * ```javascript
 * isUndef(void 0); // -> true
 * isUndef(null); // -> false
 * ```
 */

isUndef = function (val)
{
    return val === void 0;
};