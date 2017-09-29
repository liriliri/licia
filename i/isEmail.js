/* Loosely validate an email address.
 *
 * |Name  |Type   |Desc                                 |
 * |------|-------|-------------------------------------|
 * |val   |string |Value to check                       |
 * |return|boolean|True if value is an email like string|
 *
 * ```javascript
 * isEmail('surunzi@foxmail.com'); // -> true
 * ```
 */

function exports(val)
{
    return regEmail.test(val);
}

var regEmail = /.+@.+\..+/;
