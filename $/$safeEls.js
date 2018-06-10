/* Convert value into an array, if it's a string, do querySelector.
 *
 * |Name  |Type                |Desc             |
 * |------|--------------------|-----------------|
 * |value |element array string|Value to convert |
 * |return|array               |Array of elements|
 *
 * ```javascript
 * $safeEls('.test'); // -> Array of elements with test class
 * ```
 */

/* module
 * env: browser
 * test: browser
 */

_('isStr toArr Select');

function exports(val) {
    return toArr(isStr(val) ? new Select(val) : val);
}
