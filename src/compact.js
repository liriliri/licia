/* Return a copy of the array with all falsy values removed.
 *
 * The values false, null, 0, "", undefined, and NaN are falsey.
 *
 * |Name  |Desc                        |
 * |------|----------------------------|
 * |arr   |Array to compact            |
 * |return|New array of filtered values|
 */

/* example
 * compact([0, 1, false, 2, '', 3]); // -> [1, 2, 3]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function compact(arr: any[]): any[];
 */

_('filter');

exports = function(arr) {
    return filter(arr, function(val) {
        return !!val;
    });
};
