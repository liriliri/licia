/* Convert base of a number.
 *
 * |Name  |Desc             |
 * |------|-----------------|
 * |num   |Number to convert|
 * |from  |Base from        |
 * |to    |Base to          |
 * |return|Converted number |
 */

/* example
 * convertBase('10', 2, 10); // -> '2'
 * convertBase('ff', 16, 2); // -> '11111111'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function convertBase(
 *     num: number | string,
 *     from: number,
 *     to: number
 * ): string;
 */

exports = function(num, from, to) {
    return parseInt(num, from).toString(to);
};
