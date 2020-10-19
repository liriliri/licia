/* Create duplicate-free version of an array.
 *
 * |Name  |Desc                         |
 * |------|-----------------------------|
 * |arr   |Array to inspect             |
 * |cmp   |Function for comparing values|
 * |return|New duplicate free array     |
 */

/* example
 * unique([1, 2, 3, 1]); // -> [1, 2, 3]
 */

/* module
 * env: all
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
