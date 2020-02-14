/* Get maximum value of given numbers.
 *
 * |Name  |Desc                |
 * |------|--------------------|
 * |...num|Numbers to calculate|
 * |return|Maximum value       |
 */

/* example
 * max(2.3, 1, 4.5, 2); // 4.5
 */

/* module
 * env: all
 */

/* typescript
 * export declare function max(...num: number[]): number;
 */

exports = function() {
    const arr = arguments;
    let ret = arr[0];

    for (let i = 1, len = arr.length; i < len; i++) {
        if (arr[i] > ret) ret = arr[i];
    }

    return ret;
};
