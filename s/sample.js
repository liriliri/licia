/* Sample random values from a collection.
 *
 * |Name  |Type        |Desc                  |
 * |------|------------|----------------------|
 * |obj   |array object|Collection to sample  |
 * |n     |number      |Number of values      |
 * |return|array       |Array of sample values|
 *
 * ```javascript
 * sample([2, 3, 1], 2); // -> [2, 3]
 * sample({a: 1, b: 2, c: 3}, 1); // -> [2]
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('isArrLike clone values random swap');

function exports(obj, n) {
    var sample = isArrLike(obj) ? clone(obj) : values(obj),
        len = sample.length;

    n = Math.max(Math.min(n, len), 0);

    var last = len - 1;

    for (var i = 0; i < n; i++) {
        var rand = random(i, last);
        swap(sample, i, rand);
    }

    return sample.slice(0, n);
}
