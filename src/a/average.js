/* Get average value of given numbers.
 *
 * |Name  |Type  |Desc                |
 * |------|------|--------------------|
 * |...num|number|Numbers to calculate|
 * |return|number|Average value       |
 */

/* example
 * average(5, 3, 1); // -> 3
 */

/* module
 * env: all
 * test: all
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
