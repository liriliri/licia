/* Reverse array without mutating it.
 *
 * |Name  |Type |Desc           |
 * |------|-----|---------------|
 * |arr   |array|Array to modify|
 * |return|array|Reversed array |
 */

/* example
 * reverse([1, 2, 3]); // -> [3, 2, 1]
 */

/* module
 * env: all
 * since: 1.16.0
 */

/* typescript
 * export declare function reverse(arr: any[]): any[];
 */

exports = function(arr) {
    let len = arr.length;
    const ret = Array(len);

    len--;
    for (let i = 0; i <= len; i++) {
        ret[len - i] = arr[i];
    }

    return ret;
};
