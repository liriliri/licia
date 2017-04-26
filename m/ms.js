/* Convert time string formats to milliseconds.
 * 
 * |Name  |Type  |Desc         |
 * |------|------|-------------|
 * |str   |string|String format|
 * |return|number|Milliseconds |
 * 
 * ```javascript
 * ms('1s'); // -> 1000 
 * ms('1m'); // -> 60000 
 * ms('1.5h'); // -> 5400000 
 * ms('1d'); // -> 86400000
 * ms('1y'); // -> 31557600000
 * ms('1000'); // -> 1000
 * ``
 */

_('toNum');

function exports(str) 
{
    var match = str.match(regStrTime);

    if (!match) return;

    return toNum(match[1]) * factor[match[2] || 'ms'];
}

var factor = {
    ms: 1,
    s: 1000
};
factor.m = factor.s * 60;
factor.h = factor.m * 60;
factor.d = factor.h * 24;
factor.y = factor.d * 365.25;

var regStrTime = /^((?:\d+)?\.?\d+) *(s|m|h|d|y)?$/;