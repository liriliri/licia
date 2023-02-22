/* Check if value is classified as an arguments object.
 *
 * |Name  |Desc                                |
 * |------|------------------------------------|
 * |val   |Value to check                      |
 * |return|True if value is an arguments object|
 */

/* example
 * isArgs(
 *     (function() {
 *         return arguments;
 *     })()
 * ); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isArgs(val: any): val is IArguments;
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object Arguments]';
};
