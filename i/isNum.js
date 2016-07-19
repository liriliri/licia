/* Checks if value is classified as a Number primitive or object.
 *
 * |Name  |Type   |Desc                                 |
 * |------|-------|-------------------------------------|
 * |value |*      |Value to check                       |
 * |return|boolean|True if value is correctly classified|
 */

_('objToStr');

function exports(val)
{
    return objToStr(val) === '[object Number]';
}