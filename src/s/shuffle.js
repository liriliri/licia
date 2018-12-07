/* Randomize the order of the elements in a given array.
 *
 * |Name  |Type |Desc              |
 * |------|-----|------------------|
 * |arr   |array|Array to randomize|
 * |return|array|Randomized Array  |
 */

/* example
 * shuffle([1, 2, 3]); // -> [3, 1, 2]
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function shuffle(arr: any[]): any[];
 */

_('sample');

exports = function(obj) {
    return sample(obj, Infinity);
};
