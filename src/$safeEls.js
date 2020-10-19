/* Convert value into an array, if it's a string, do querySelector.
 *
 * |Name  |Desc             |
 * |------|-----------------|
 * |val   |Value to convert |
 * |return|Array of elements|
 */

/* example
 * $safeEls(document.querySelector('.test'));
 * $safeEls(document.querySelectorAll('.test'));
 * $safeEls('.test'); // -> Array of elements with test class
 */

/* module
 * env: browser
 */

/* typescript
 * export declare namespace $safeEls {
 *     type El = Element | Element[] | NodeListOf<Element> | string;
 * }
 * export declare function $safeEls(val: $safeEls.El): Element[];
 */

_('isStr toArr Select');

exports = function(val) {
    return toArr(isStr(val) ? new Select(val) : val);
};
