/* Checks if value is the language type of Object.
 *
 * |Name  |Type   |Desc                      |
 * |-----------------------------------------|
 * |val   |*      |The value to check        |
 * |return|boolean|True if value is an object|
 *
 * [Object Language Type Spec](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
 *
 * ```javascript
 * isObj({}); // -> true
 * isObj([]); // -> true
 * ```
 */

isObj = function (val)
{
    var type = typeof val;

    return !!val && (type === 'function' || type === 'object');
};