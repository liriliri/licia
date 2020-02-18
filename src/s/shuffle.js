/* Randomize the order of the elements in a given array.
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |arr   |Array to randomize|
 * |return|Randomized Array  |
 */

/* example
 * shuffle([1, 2, 3]); // -> [3, 1, 2]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function shuffle(arr: any[]): any[];
 */

_('sample');

exports = function(obj) {
    return sample(obj, Infinity);
};
