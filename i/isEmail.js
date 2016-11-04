/* Loosely validate an email address.
 *
 * |Name  |Type   |Desc                                 |
 * |------|-------|-------------------------------------|
 * |val   |*      |Value to check                       |
 * |return|boolean|True if value is an email like string|
 *
 * ```javascript
 * isEmail('surunzi@foxmail.com'); // -> true
 * ```
 */

_('isStr');

var regEmail = /.+@.+\..+/;

function exports(val)
{
    return isStr(val) && regEmail.test(val);
}