/* Check if value is a Blob.
 *
 * |Name  |Type   |Desc                   |
 * |------|-------|-----------------------|
 * |val   |*      |Value to check         |
 * |return|boolean|True if value is a Blob|
 */

/* example
 * isBlob(new Blob([])); // -> true;
 * isBlob([]); // -> false
 */

/* module
 * env: browser
 * test: browser
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object Blob]';
};
