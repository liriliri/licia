/* Check if value is a string primitive.
 *
 * |Name  |Desc                               |
 * |------|-----------------------------------|
 * |val   |Value to check                     |
 * |return|True if value is a string primitive|
 */

/* example
 * isStr('licia'); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isStr(val: any): boolean;
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object String]';
};
