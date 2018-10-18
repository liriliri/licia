/* Color converter.
 *
 * ### constructor
 *
 * |Name |Type         |Desc            |
 * |-----|-------------|----------------|
 * |color|string object|Color to convert|
 *
 * ### toRgb
 *
 * Get color rgb string format.
 *
 * ### toHex
 *
 * Get color hex string format.
 *
 * ### toHsl
 *
 * Get color hsl string format.
 *
 * ### parse
 *
 * [static] Parse color string into object containing value and model.
 *
 * |Name  |Type  |Desc                             |
 * |------|------|---------------------------------|
 * |color |string|Color string                     |
 * |return|object|Object containing value and model|
 */

/* example
 * Color.parse('rgb(170, 287, 204, 0.5)'); // -> {val: [170, 187, 204, 0.5], model: 'rgb'}
 * var color = new Color('#abc');
 * color.toRgb(); // -> 'rgb(170, 187, 204)'
 * color.toHsl(); // -> 'hsl(210, 25%, 73%)'
 */

/* module
 * env: all
 * test: all
 */

_('Class isStr clamp rgbToHsl hslToRgb lpad convertBase');

exports = Class(
    {
        initialize: function Color(color) {
            if (isStr(color)) color = exports.parse(color);

            this.model = color.model;
            this.val = color.val;
        },
        toRgb: function() {
            var val = this.val;
            if (this.model === 'hsl') val = hslToRgb(val);

            var prefix = 'rgba';
            if (val[3] === 1) {
                prefix = 'rgb';
                val = val.slice(0, 3);
            }

            return prefix + '(' + val.join(', ') + ')';
        },
        toHex: function() {
            var val = this.val;
            if (this.model === 'hsl') val = hslToRgb(val);

            var ret = hexDouble(val[0]) + hexDouble(val[1]) + hexDouble(val[2]);

            if (ret[0] === ret[1] && ret[2] === ret[3] && ret[4] === ret[5]) {
                ret = ret[0] + ret[2] + ret[5];
            }

            return '#' + ret;
        },
        toHsl: function() {
            var val = this.val;
            if (this.model === 'rgb') val = rgbToHsl(val);

            var prefix = 'hsla';
            if (val[3] === 1) {
                prefix = 'hsl';
                val = val.slice(0, 3);
            }

            val[1] = val[1] + '%';
            val[2] = val[2] + '%';

            return prefix + '(' + val.join(', ') + ')';
        }
    },
    {
        parse: function(colorStr) {
            var i, match;

            var val = [0, 0, 0, 1],
                model = 'rgb';

            /* eslint-disable no-cond-assign */
            if ((match = colorStr.match(regHexAbbr))) {
                match = match[1];

                for (i = 0; i < 3; i++) {
                    val[i] = parseInt(match[i] + match[i], 16);
                }
            } else if ((match = colorStr.match(regHex))) {
                match = match[1];

                for (i = 0; i < 3; i++) {
                    var i2 = i * 2;
                    val[i] = parseInt(match.slice(i2, i2 + 2), 16);
                }
            } else if ((match = colorStr.match(regRgba))) {
                for (i = 0; i < 3; i++) {
                    val[i] = parseInt(match[i + 1], 0);
                }

                if (match[4]) val[3] = parseFloat(match[4]);
            } else if ((match = colorStr.match(regRgbaPer))) {
                for (i = 0; i < 3; i++) {
                    val[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
                }

                if (match[4]) val[3] = parseFloat(match[4]);
            } else if ((match = colorStr.match(regHsla))) {
                model = 'hsl';
                val = [
                    ((parseFloat(match[1]) % 360) + 360) % 360,
                    clamp(parseFloat(match[2]), 0, 100),
                    clamp(parseFloat(match[3]), 0, 100),
                    clamp(parseFloat(match[4]), 0, 1)
                ];
            }

            return {
                val: val,
                model: model
            };
        }
    }
);

var regHexAbbr = /^#([a-fA-F0-9]{3})$/,
    regHex = /^#([a-fA-F0-9]{6})$/,
    regRgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/,
    regRgbaPer = /^rgba?\(\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/,
    regHsla = /^hsla?\(\s*([+-]?\d*[.]?\d+)(?:deg)?\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/;

function hexDouble(num) {
    return lpad(convertBase(num, 10, 16), '0', 2);
}
