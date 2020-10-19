/* Simple duration format function.
 *
 * |Name           |Desc                           |
 * |---------------|-------------------------------|
 * |duration       |Duration to format, millisecond|
 * |mask='hh:mm:ss'|Format mask                    |
 * |return         |Formatted duration             |
 *
 * |Mask|Desc        |
 * |----|------------|
 * |d   |Days        |
 * |h   |Hours       |
 * |m   |Minutes     |
 * |s   |Seconds     |
 * |l   |Milliseconds|
 */

/* example
 * durationFormat(12345678); // -> '03:25:45'
 * durationFormat(12345678, 'h:m:s:l'); // -> '3:25:45:678'
 */

/* module
 * env: all
 * since: 1.18.0
 */

/* typescript
 * export declare function durationFormat(duration: number, mask?: string): string;
 */

_('toInt lpad toStr');

const floor = Math.floor;

exports = function(duration, mask = 'hh:mm:ss') {
    duration = toInt(duration);

    const d = floor(duration / 86400000);
    const h = floor(duration / 3600000) % 24;
    const m = floor(duration / 60000) % 60;
    const s = floor(duration / 1000) % 60;
    const l = floor(duration) % 1000;

    const flags = {
        d,
        h,
        hh: padZero(h),
        m,
        mm: padZero(m),
        s,
        ss: padZero(s),
        l,
        ll: padZero(l, 3)
    };

    return mask.replace(regToken, match => {
        if (match in flags) return flags[match];

        return match.slice(1, match.length - 1);
    });
};

const padZero = (str, len = 2) => lpad(toStr(str), len, '0');

const regToken = /d{1,2}|h{1,2}|m{1,2}|s{1,2}|l{1,2}|"[^"]*"|'[^']*'/g;
