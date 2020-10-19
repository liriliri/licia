/* Produces a random number between min and max(inclusive).
 *
 * |Name          |Desc                  |
 * |--------------|----------------------|
 * |min           |Minimum possible value|
 * |max           |Maximum possible value|
 * |floating=false|Float or not          |
 * |return        |Random number         |
 */

/* example
 * random(1, 5); // -> an integer between 0 and 5
 * random(5); // -> an integer between 0 and 5
 * random(1.2, 5.2, true); /// -> a floating-point number between 1.2 and 5.2
 */

/* module
 * env: all
 */

/* typescript
 * export declare function random(
 *     min: number,
 *     max?: number,
 *     floating?: boolean
 * ): number;
 */

exports = function(min, max, floating) {
    if (max == null) {
        max = min;
        min = 0;
    }

    const rand = Math.random();

    if (floating || min % 1 || max % 1) {
        return Math.min(
            min +
                rand *
                    (max - min + parseFloat('1e-' + ((rand + '').length - 1))),
            max
        );
    }

    return min + Math.floor(rand * (max - min + 1));
};
