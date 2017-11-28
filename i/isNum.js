/* Check if value is classified as a Number primitive or object.
 *
 * |Name  |Type   |Desc                                 |
 * |------|-------|-------------------------------------|
 * |value |*      |Value to check                       |
 * |return|boolean|True if value is correctly classified|
 * 
 * ```javascript
 * isNum(5); // -> true
 * isNum(5.1); // -> true
 * isNum({}); // -> false
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('objToStr');

function exports(val)
{
    return objToStr(val) === '[object Number]';
}