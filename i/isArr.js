/* Check if value is an `Array` object.
 *
 * |Name  |Type   |Desc                              |
 * |-------------------------------------------------|
 * |val   |*      |The value to check                |
 * |return|boolean|True if value is an `Array` object|
 *
 * ```javascript
 * isArr([]); // -> true
 * isArr({}); // -> false
 * ```
 */

_('objToStr');

exports = Array.isArray || function (val)
{
    return objToStr(val) === '[object Array]';
};