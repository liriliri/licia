/* Convert value to an integer.
 *
 * |Name  |Desc             |
 * |------|-----------------|
 * |val   |Value to convert |
 * |return|Converted integer|
 */

/* example
 * toInt(1.1); // -> 1
 * toInt(undefined); // -> 0
 */

/* module
 * env: all
 */

/* typescript
 * export declare function toInt(val: any): number;
 */

_('toNum');

exports = function(val) {
    if (!val) return val === 0 ? val : 0;

    val = toNum(val);

    return val - (val % 1);
};
