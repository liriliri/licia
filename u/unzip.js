/* Opposite of zip.
 *
 * |Name  |Type |Desc                                |
 * |------|-----|------------------------------------|
 * |arr   |array|Array of grouped elements to process|
 * |return|array|New array of regrouped elements     |
 */

/* example
 * unzip([['a', 1, true], ['b', 2, false]]); // -> [['a', 'b'], [1, 2], [true, false]]
 */

/* module
 * env: all
 * test: all
 */

_('map pluck max');

function exports(arr) {
    var len = max.apply(
            null,
            map(arr, function(arr) {
                return arr.length;
            })
        ),
        ret = Array(len);

    for (var i = 0; i < len; i++) {
        ret[i] = pluck(arr, i);
    }

    return ret;
}
