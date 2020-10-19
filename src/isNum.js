/* Check if value is classified as a Number primitive or object.
 *
 * |Name  |Desc                                 |
 * |------|-------------------------------------|
 * |val   |Value to check                       |
 * |return|True if value is correctly classified|
 */

/* example
 * isNum(5); // -> true
 * isNum(5.1); // -> true
 * isNum({}); // -> false
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isNum(val: any): boolean;
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object Number]';
};
