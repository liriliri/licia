/* Loosely validate an email address.
 *
 * |Name  |Type   |Desc                                 |
 * |------|-------|-------------------------------------|
 * |val   |string |Value to check                       |
 * |return|boolean|True if value is an email like string|
 */

/* example
 * isEmail('surunzi@foxmail.com'); // -> true
 */

/* module
 * env: all
 * test: all
 */

function exports(val) {
    return regEmail.test(val);
}

var regEmail = /.+@.+\..+/;
