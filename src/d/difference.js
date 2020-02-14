/* Create an array of unique array values not included in the other given array.
 *
 * |Name   |Desc                        |
 * |-------|----------------------------|
 * |arr    |Array to inspect            |
 * |...rest|Values to exclude           |
 * |return |New array of filtered values|
 */

/* example
 * difference([3, 2, 1], [4, 2]); // -> [3, 1]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function difference(arr: any[], ...rest: any[]): any[];
 */

_('restArgs flatten filter contain');

exports = restArgs(function(arr, rest) {
    rest = flatten(rest);

    return filter(arr, function(val) {
        return !contain(rest, val);
    });
});
