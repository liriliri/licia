/* Return a copy of the array with all falsy values removed.
 *
 * The values false, null, 0, "", undefined, and NaN are falsey.
 *
 * |Name  |Type |Desc                        |
 * |------|-----|----------------------------|
 * |arr   |array|Array to compact            |
 * |return|array|New array of filtered values|
 *
 * ```javascript
 * compact([0, 1, false, 2, '', 3]); // -> [1, 2, 3]
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('filter');

function exports(arr) {
    return filter(arr, function(val) {
        return !!val;
    });
}
