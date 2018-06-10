/* Get maximum value of given numbers.
 *
 * |Name  |Type  |Desc                |
 * |------|------|--------------------|
 * |...num|number|Numbers to calculate|
 * |return|number|Maximum value       |
 *
 * ```javascript
 * max(2.3, 1, 4.5, 2); // 4.5
 * ```
 */

/* module
 * env: all
 * test: all
 */

function exports() {
    var arr = arguments,
        ret = arr[0];

    for (var i = 1, len = arr.length; i < len; i++) {
        if (arr[i] > ret) ret = arr[i];
    }

    return ret;
}
