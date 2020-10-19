/* Compute sum of given numbers.
 *
 * |Name  |Desc                |
 * |------|--------------------|
 * |...num|Numbers to calculate|
 * |return|Sum of numbers      |
 */

/* example
 * sum(1, 2, 5); // -> 8
 */

/* module
 * env: all
 */

/* typescript
 * export declare function sum(...num: number[]): number;
 */

exports = function() {
    const arr = arguments;
    let ret = 0;

    for (let i = 0, len = arr.length; i < len; i++) ret += arr[i];

    return ret;
};
