/* Convert value to an integer.
 *
 * |Name  |Type  |Desc             |
 * |-------------------------------|
 * |val   |*     |Value to convert |
 * |return|number|Converted integer|
 *
 * ```javascript
 * toInt(1.1); // -> 1
 * ```
 */

_('toNum');

exports = function (val)
{
    if (!val) return val === 0 ? val : 0;

    val = toNum(val);

    return val - val % 1;
};