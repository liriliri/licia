/* Check if value is a DOM element.
 *
 * |Name  |Type   |Desc                          |
 * |------|-------|------------------------------|
 * |val   |*      |Value to check                |
 * |return|boolean|True if value is a DOM element|
 */

/* example
 * isEl(document.body); // -> true
 */

/* module
 * env: browser
 * test: browser
 */

exports = function(val) {
    return !!(val && val.nodeType === 1);
};
