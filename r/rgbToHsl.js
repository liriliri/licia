/* Convert rgb to hsl.
 *
 * |Name  |Type |Desc      |
 * |------|-----|----------|
 * |rgb   |array|Rgb values|
 * |return|array|Hsl values|
 *
 * ```javascript
 * rgbToHsl([52, 203, 165, 0.8]); // -> [165, 59, 50, 0.8]
 * ```
 */

/* module
 * env: all
 * test: all
 */

function exports(rgb)
{
    var r = rgb[0] / 255,
        g = rgb[1] / 255,
        b = rgb[2] / 255,
        min = mMin(r, g, b),
        max = mMax(r, g, b),
        delta = max - min,
        h, s, l;

    if (max === min)
    {
        h = 0;
    } else if (r === max)
    {
        h = (g - b) / delta;
    } else if (g === max)
    {
        h = 2 + (b - r) / delta;
    } else
    {
        h = 4 + (r - g) / delta;
    }

    h = mMin(h * 60, 360);

    if (h < 0) h += 360;

    l = (min + max) / 2;

    if (max === min)
    {
        s = 0;
    } else if (l <= 0.5)
    {
        s = delta / (max + min);
    } else
    {
        s = delta / (2 - max - min);
    }

    var ret = [round(h), round(s * 100), round(l * 100)];

    if (rgb[3]) ret[3] = rgb[3];

    return ret;
}

var mMin = Math.min,
    mMax = Math.max,
    round = Math.round;