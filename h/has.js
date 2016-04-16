/* Checks if key is a direct property.
 *
 * |Name  |Type   |Desc                            |
 * |-----------------------------------------------|
 * |obj   |object |The object to query             |
 * |key   |string |The path to check               |
 * |return|boolean|True if key is a direct property|
 *
 * ```javascript
 * has({one: 1}, 'one'); // -> true
 * ```
 */

var hasOwnProp = Object.prototype.hasOwnProperty;

exports = function (obj, key)
{
    return hasOwnProp.call(obj, key);
};