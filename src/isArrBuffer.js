/* Check if value is an ArrayBuffer.
 *
 * |Name  |Desc                           |
 * |------|-------------------------------|
 * |val   |Value to check                 |
 * |return|True if value is an ArrayBuffer|
 */

/* example
 * isArrBuffer(new ArrayBuffer(8)); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isArrBuffer(val: any): boolean;
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object ArrayBuffer]';
};
