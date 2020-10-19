/* Loosely validate an email address.
 *
 * |Name  |Desc                                 |
 * |------|-------------------------------------|
 * |val   |Value to check                       |
 * |return|True if value is an email like string|
 */

/* example
 * isEmail('surunzi@foxmail.com'); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isEmail(val: string): boolean;
 */

exports = function(val) {
    return regEmail.test(val);
};

const regEmail = /.+@.+\..+/;
