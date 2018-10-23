/* Check if value is classified as a Number primitive or object.
 *
 * |Name  |Type   |Desc                                 |
 * |------|-------|-------------------------------------|
 * |val   |*      |Value to check                       |
 * |return|boolean|True if value is correctly classified|
 */

/* example
 * isNum(5); // -> true
 * isNum(5.1); // -> true
 * isNum({}); // -> false
 */

/* module
 * env: all
 * test: all
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object Number]';
};
