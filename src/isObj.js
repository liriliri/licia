/* Check if value is the language type of Object.
 *
 * |Name  |Desc                      |
 * |------|--------------------------|
 * |val   |Value to check            |
 * |return|True if value is an object|
 *
 * [Language Spec](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
 */

/* example
 * isObj({}); // -> true
 * isObj([]); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isObj(val: any): boolean;
 */

exports = function(val) {
    const type = typeof val;

    return !!val && (type === 'function' || type === 'object');
};
