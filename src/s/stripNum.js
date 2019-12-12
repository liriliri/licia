/* Strip number to a specified precision.
 *
 * |Name        |Type  |Desc           |
 * |------------|------|---------------|
 * |num         |number|Number to strip|
 * |precision=12|number|Precision      |
 * |return      |number|Result number  |
 */

/* example
 * stripNum(0.1 + 0.2); // -> 0.3
 */

/* module
 * env: all
 */

/* typescript
 * export declare function stripNum(num: number, precision?: number): number;
 */

exports = function(num, precision = 12) {
    return parseFloat(num.toPrecision(precision));
};
