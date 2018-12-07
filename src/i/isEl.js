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

/* typescript
 * export declare function isEl(val: any): boolean;
 */

exports = function(val) {
    return !!(val && val.nodeType === 1);
};
