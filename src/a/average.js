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

function exports() {
    var arr = arguments,
        sum = 0;

    for (var i = 0, len = arr.length; i < len; i++) sum += arr[i];

    return sum / len;
}
