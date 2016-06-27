/* Check if value is a string primitive.
 *
 * |Name  |Type   |Desc                               |
 * |------|-------|-----------------------------------|
 * |val   |*      |The value to check                 |
 * |return|boolean|True if value is a string primitive|
 *
 * ```javascript
 * isStr('eris'); // -> true
 * ```
 */

_('objToStr');

exports = function (val)
{
    return objToStr(val) === '[object String]';
};

