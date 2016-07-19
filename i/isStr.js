/* Check if value is a string primitive.
 *
 * |Name  |Type   |Desc                               |
 * |------|-------|-----------------------------------|
 * |val   |*      |Value to check                     |
 * |return|boolean|True if value is a string primitive|
 *
 * ```javascript
 * isStr('eris'); // -> true
 * ```
 */

_('objToStr');

function exports(val)
{
    return objToStr(val) === '[object String]';
}

