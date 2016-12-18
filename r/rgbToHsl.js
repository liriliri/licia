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

function exports(rgb)
{
    var r = rgb[0] / 255,
        g = rgb[1] / 255,
        b = rgb[2] / 255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
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
    } else if (b === max)
    {
        h = 4 + (r - g) / delta;
    }

    h = Math.min(h * 60, 360);

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

    var ret = [Math.round(h), Math.round(s * 100), Math.round(l * 100)];

    if (rgb[3]) ret[3] = rgb[3];

    return ret;
}