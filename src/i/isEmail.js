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

/* typescript
 * export declare function isEmail(val: string): boolean;
 */

exports = function(val) {
    return regEmail.test(val);
};

const regEmail = /.+@.+\..+/;
