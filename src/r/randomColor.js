/* Random color generator.
 *
 * |Name   |Desc          |
 * |-------|--------------|
 * |options|Random options|
 * |return |Random color  |
 *
 * Available options:
 *
 * |Name      |Desc                             |
 * |----------|---------------------------------|
 * |count=1   |Color number                     |
 * |hue       |Hue, number between 0 and 360    |
 * |lightness |Lightness, number between 0 and 1|
 * |format=hex|Color format, hex, hsl or rgb    |
 * |seed      |Random color seed                |
 */

/* example
 * randomColor({
 *     count: 2
 * }); // -> ['#fed7f4', '#526498']
 */

/* module
 * env: all
 * since: 1.12.0
 */

/* typescript
 * export declare function randomColor(): string;
 * export declare function randomColor(options: {
 *     count?: number;
 *     hue?: number;
 *     lightness?: number;
 *     format?: string;
 *     seed?: number;
 * }): string | string[];
 */

_('defaults random Color seedRandom isFn');

exports = function(options = {}) {
    defaults(options, defOpts);

    const { count } = options;
    let { randomH, randomL, randomS } = options;
    if (!isFn(randomH)) {
        const seed = options.seed || random(0, 100000);
        randomH = seedRandom(seed, 0, 360, false);
        randomL = seedRandom(seed + 1, 0, 1);
        randomS = seedRandom(seed + 2, 0, 1);
    }
    if (count > 1) {
        const colors = [];
        for (let i = 0; i < count; i++) {
            colors.push(
                exports(
                    defaults(
                        {
                            count: 1,
                            randomH,
                            randomL,
                            randomS
                        },
                        options
                    )
                )
            );
        }
        return colors;
    }

    const hue = options.hue || randomH();
    const lightness = options.lightness || randomL().toFixed(2);
    const saturation = options.saturation || randomS().toFixed(2);

    const color = new Color({
        val: [hue, Math.round(saturation * 100), Math.round(lightness * 100)],
        model: 'hsl'
    });

    switch (options.format) {
        case 'hsl':
            return color.toHsl();
        case 'rgb':
            return color.toRgb();
        default:
            return color.toHex();
    }
};

const defOpts = {
    count: 1,
    format: 'hex'
};
