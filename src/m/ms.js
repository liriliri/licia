/* Convert time string formats to milliseconds.
 *
 * Turn time string into milliseconds.
 *
 * |Name  |Type  |Desc         |
 * |------|------|-------------|
 * |str   |string|String format|
 * |return|number|Milliseconds |
 *
 * Turn milliseconds into time string.
 *
 * |Name  |Type  |Desc         |
 * |------|------|-------------|
 * |num   |number|Milliseconds |
 * |return|string|String format|
 */

/* example
 * ms('1s'); // -> 1000
 * ms('1m'); // -> 60000
 * ms('1.5h'); // -> 5400000
 * ms('1d'); // -> 86400000
 * ms('1y'); // -> 31557600000
 * ms('1000'); // -> 1000
 * ms(1500); // -> '1.5s'
 * ms(60000); // -> '1m'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function ms(str: string): number;
 * export declare function ms(num: number): string;
 */

_('toNum isStr');

exports = function(str) {
    if (isStr(str)) {
        var match = str.match(regStrTime);

        if (!match) return 0;

        return toNum(match[1]) * factor[match[2] || 'ms'];
    } else {
        var num = str,
            suffix = 'ms';

        for (var i = 0, len = suffixList.length; i < len; i++) {
            if (num >= factor[suffixList[i]]) {
                suffix = suffixList[i];
                break;
            }
        }

        return +(num / factor[suffix]).toFixed(2) + suffix;
    }
};

var factor = {
    ms: 1,
    s: 1000
};
factor.m = factor.s * 60;
factor.h = factor.m * 60;
factor.d = factor.h * 24;
factor.y = factor.d * 365.25;

var suffixList = ['y', 'd', 'h', 'm', 's'];

var regStrTime = /^((?:\d+)?\.?\d+) *(s|m|h|d|y)?$/;
