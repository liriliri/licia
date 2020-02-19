/* Get average value of given numbers.
 *
 * |Name  |Desc                |
 * |------|--------------------|
 * |...num|Numbers to calculate|
 * |return|Average value       |
 */

/* example
 * average(5, 3, 1); // -> 3
 */

/* module
 * env: all
 */

/* typescript
 * export declare function average(...num: number[]): number;
 */

exports = function() {
    const arr = arguments;
    let sum = 0;
    const len = arr.length;

    for (let i = 0; i < len; i++) sum += arr[i];

    return sum / len;
};
