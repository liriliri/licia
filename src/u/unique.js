/* Create duplicate-free version of an array.
 *
 * |Name  |Type    |Desc                         |
 * |------|--------|-----------------------------|
 * |arr   |array   |Array to inspect             |
 * |[cmp] |function|Function for comparing values|
 * |return|array   |New duplicate free array     |
 */

/* example
 * unique([1, 2, 3, 1]); // -> [1, 2, 3]
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function unique(
 *     arr: any[],
 *     cmp?: (a: any, b: any) => boolean | number
 * ): any[];
 */

_('filter');

exports = function(arr, cmp) {
    cmp = cmp || isEqual;

    return filter(arr, function(item, idx, arr) {
        const len = arr.length;

        while (++idx < len) {
            if (cmp(item, arr[idx])) return false;
        }

        return true;
    });
};

function isEqual(a, b) {
    return a === b;
}
