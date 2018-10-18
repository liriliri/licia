/* Create an array of unique array values not included in the other given array.
 *
 * |Name     |Type |Desc                        |
 * |---------|-----|----------------------------|
 * |arr      |array|Array to inspect            |
 * |[...rest]|array|Values to exclude           |
 * |return   |array|New array of filtered values|
 */

/* example
 * difference([3, 2, 1], [4, 2]); // -> [3, 1]
 */

/* module
 * env: all
 * test: all
 */

_('restArgs flatten filter contain');

exports = restArgs(function(arr, rest) {
    rest = flatten(rest);

    return filter(arr, function(val) {
        return !contain(rest, val);
    });
});
