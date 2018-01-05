/* Check if value is classified as an arguments object.
 *
 * |Name  |Type   |Desc                                |
 * |------|-------|------------------------------------|
 * |val   |*      |Value to check                      |
 * |return|boolean|True if value is an arguments object|
 *
 * ```javascript
 * (function () {
 *     isArgs(arguments); // -> true
 * })();
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('objToStr');

function exports(val)
{
    return objToStr(val) === '[object Arguments]';
}