/* Check if value is classified as a Date object.
 *
 * |Name  |Desc                          |
 * |------|------------------------------|
 * |val   |value to check                |
 * |return|True if value is a Date object|
 */

/* example
 * isDate(new Date()); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isDate(val: any): boolean;
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object Date]';
};
