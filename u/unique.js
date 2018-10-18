/* Create duplicate-free version of an array.
 *
 * |Name     |Type    |Desc                         |
 * |---------|--------|-----------------------------|
 * |arr      |array   |Array to inspect             |
 * |[compare]|function|Function for comparing values|
 * |return   |array   |New duplicate free array     |
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
 *     compare?: (a: any, b: any) => boolean | number
 * ): any[]
 */

_('filter');

function exports(arr, compare) {
    compare = compare || isEqual;

    return filter(arr, function(item, idx, arr) {
        var len = arr.length;

        while (++idx < len) {
            if (compare(item, arr[idx])) return false;
        }

        return true;
    });
}

function isEqual(a, b) {
    return a === b;
}
