/* Check if value is the language type of Object.
 *
 * |Name  |Type   |Desc                      |
 * |------|-------|--------------------------|
 * |val   |*      |Value to check            |
 * |return|boolean|True if value is an object|
 *
 * [Language Spec](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
 */

/* example
 * isObj({}); // -> true
 * isObj([]); // -> true
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isObj(val: any): boolean;
 */

exports = function(val) {
    var type = typeof val;

    return !!val && (type === 'function' || type === 'object');
};
