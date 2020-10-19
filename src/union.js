/* Create an array of unique values, in order, from all given arrays.
 *
 * |Name  |Desc                        |
 * |------|----------------------------|
 * |...arr|Arrays to inspect           |
 * |return|New array of combined values|
 */

/* example
 * union([2, 1], [4, 2], [1, 2]); // -> [2, 1, 4]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function union(...arr: Array<any[]>): any[];
 */

_('restArgs unique flatten');

exports = restArgs(function(arrays) {
    return unique(flatten(arrays));
});
