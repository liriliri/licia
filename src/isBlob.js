/* Check if value is a Blob.
 *
 * |Name  |Desc                   |
 * |------|-----------------------|
 * |val   |Value to check         |
 * |return|True if value is a Blob|
 */

/* example
 * isBlob(new Blob([])); // -> true;
 * isBlob([]); // -> false
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function isBlob(val: any): boolean;
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object Blob]';
};
