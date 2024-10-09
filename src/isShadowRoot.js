/* Check if value is a ShadowRoot object.
 *
 * |Name  |Desc                         |
 * |------|-----------------------------|
 * |val   |Value to check               |
 * |return|True if value is a ShadowRoot|
 */

/* example
 * isShadowRoot(document.body); // -> false
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function isShadowRoot(val: any): val is ShadowRoot;
 */

exports = function(val) {
    if (window.ShadowRoot) {
        return val instanceof ShadowRoot;
    }

    return false;
};
