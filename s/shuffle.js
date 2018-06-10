/* Randomize the order of the elements in a given array.
 *
 * |Name  |Type |Desc              |
 * |------|-----|------------------|
 * |arr   |array|Array to randomize|
 * |return|array|Randomized Array  |
 *
 * ```javascript
 * shuffle([1, 2, 3]); // -> [3, 1, 2]
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('sample');

function exports(obj) {
    return sample(obj, Infinity);
}
