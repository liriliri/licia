/* Create an array of unique values, in order, from all given arrays.
 *
 * |Name  |Type |Desc                        |
 * |------|-----|----------------------------|
 * |...arr|array|Arrays to inspect           |
 * |return|array|New array of combined values|
 */

/* example
 * union([2, 1], [4, 2], [1, 2]); // -> [2, 1, 4]
 */

/* module
 * env: all
 * test: all
 */

_('restArgs unique flatten');

exports = restArgs(function(arrays) {
    return unique(flatten(arrays));
});
