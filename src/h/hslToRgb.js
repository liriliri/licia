/* Convert hsl to rgb.
 *
 * |Name  |Type |Desc      |
 * |------|-----|----------|
 * |hsl   |array|Hsl values|
 * |return|array|Rgb values|
 */

/* example
 * hslToRgb([165, 59, 50, 0.8]); // -> [52, 203, 165, 0.8]
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function hslToRgb(hsl: number[]): number[];
 */

exports = function(hsl) {
    var h = hsl[0] / 360,
        s = hsl[1] / 100,
        l = hsl[2] / 100,
        ret = [],
        t1,
        t2,
        t3,
        val;

    if (hsl[3]) ret[3] = hsl[3];

    if (s === 0) {
        val = round(l * 255);
        ret[0] = ret[1] = ret[2] = val;
        return ret;
    }

    if (l < 0.5) {
        t2 = l * (1 + s);
    } else {
        t2 = l + s - l * s;
    }

    t1 = 2 * l - t2;

    for (var i = 0; i < 3; i++) {
        t3 = h + (1 / 3) * -(i - 1);
        if (t3 < 0) t3++;
        if (t3 > 1) t3--;

        if (6 * t3 < 1) {
            val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
            val = t2;
        } else if (3 * t3 < 2) {
            val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
            val = t1;
        }

        ret[i] = round(val * 255);
    }

    return ret;
};

var round = Math.round;
