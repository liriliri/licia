/* Check if value is a DOM element.
 *
 * |Name  |Desc                          |
 * |------|------------------------------|
 * |val   |Value to check                |
 * |return|True if value is a DOM element|
 */

/* example
 * isEl(document.body); // -> true
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function isEl(val: any): val is Element;
 */

exports = function(val) {
    return !!(val && val.nodeType === 1);
};
