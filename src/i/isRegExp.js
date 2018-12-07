/* Check if value is a regular expression.
 *
 * |Name  |Type   |Desc                                 |
 * |------|-------|-------------------------------------|
 * |val   |*      |Value to check                       |
 * |return|boolean|True if value is a regular expression|
 */

/* example
 * isRegExp(/a/); // -> true
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isRegExp(val: any): boolean;
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object RegExp]';
};
