/* Compute sum of given numbers.
 *
 * |Name  |Type  |Desc                |
 * |------|------|--------------------|
 * |...num|number|Numbers to calculate|
 * |return|number|Sum of numbers      |
 *
 * ```javascript
 * sum(1, 2, 5); // -> 8
 * ```
 */

/* module
 * env: all
 * test: all
 */

function exports() {
    var arr = arguments,
        ret = 0;

    for (var i = 0, len = arr.length; i < len; i++) ret += arr[i];

    return ret;
}
