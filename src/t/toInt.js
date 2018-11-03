/* Convert value to an integer.
 *
 * |Name  |Type  |Desc             |
 * |------|------|-----------------|
 * |val   |*     |Value to convert |
 * |return|number|Converted integer|
 */

/* example
 * toInt(1.1); // -> 1
 * toInt(undefined); // -> 0
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function toInt(val: any): number
 */

_('toNum');

exports = function(val) {
    if (!val) return val === 0 ? val : 0;

    val = toNum(val);

    return val - (val % 1);
};
