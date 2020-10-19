/* Strip number to a specified precision.
 *
 * |Name        |Desc           |
 * |------------|---------------|
 * |num         |Number to strip|
 * |precision=12|Precision      |
 * |return      |Result number  |
 */

/* example
 * stripNum(0.1 + 0.2); // -> 0.3
 */

/* module
 * env: all
 * since: 1.15.0
 */

/* typescript
 * export declare function stripNum(num: number, precision?: number): number;
 */

exports = function(num, precision = 12) {
    return parseFloat(num.toPrecision(precision));
};
