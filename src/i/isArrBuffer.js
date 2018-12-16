/* Check if value is an ArrayBuffer.
 *
 * |Name  |Type   |Desc                           |
 * |------|-------|-------------------------------|
 * |val   |*      |Value to check                 |
 * |return|boolean|True if value is an ArrayBuffer|
 */

/* example
 * isArrBuffer(new ArrayBuffer(8)); // -> true
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isArrBuffer(val: any): boolean;
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object ArrayBuffer]';
};
