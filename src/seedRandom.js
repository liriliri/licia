/* Seeded random number generator.
 *
 * |Name         |Desc                                          |
 * |-------------|----------------------------------------------|
 * |seed         |Random seed                                   |
 * |min=0        |Min possible value                            |
 * |max=1        |Maximum possible value                        |
 * |floating=true|Float or not                                  |
 * |return       |Function that generates random number sequence|
 */

/* example
 * const random = seedRandom(19920719, 0, 100, false);
 * random(); // -> 7
 * random(); // -> 68
 */

/* module
 * env: all
 * since: 1.12.0
 */

/* typescript
 * export declare function seedRandom(
 *     seed: number,
 *     min?: number,
 *     max?: number,
 *     floating?: boolean
 * ): () => number;
 */

// https://softwareengineering.stackexchange.com/questions/260969/original-source-of-seed-9301-49297-233280-random-algorithm
exports = function(seed, min = 0, max = 1, floating = true) {
    return function() {
        seed = (seed * 9301 + 49297) % 233280;
        let rnd = seed / 233280.0;
        rnd = min + rnd * (max - min);

        return floating ? rnd : Math.floor(rnd);
    };
};
