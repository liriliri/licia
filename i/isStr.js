/* Check if value is a string primitive.
 *
 * |Name  |Type   |Desc                               |
 * |------|-------|-----------------------------------|
 * |val   |*      |Value to check                     |
 * |return|boolean|True if value is a string primitive|
 *
 * ```javascript
 * isStr('licia'); // -> true
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('objToStr');

function exports(val) {
    return objToStr(val) === '[object String]';
}
