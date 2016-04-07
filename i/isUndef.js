/* Checks if value is undefined.
 *
 * |Name|Type|Desc|
 * |--------------|
 * |value|*|The value to check|
 * |return|boolean|Returns true if value is undefined, else false|
 *
 * ```javascript
 * _.isUndef(void 0) // -> true
 * _.isUndef(null) // -> false
 * ```
 *
 * Just a shortcut for **x === undefined**, doesn't matter that much whether you
 * use it or not.
 */

isUndef = function (val)
{
    return val === void 0;
};