/* Opposite of zip.
 *
 * |Name  |Desc                                |
 * |------|------------------------------------|
 * |arr   |Array of grouped elements to process|
 * |return|New array of regrouped elements     |
 */

/* example
 * unzip([
 *     ['a', 1, true],
 *     ['b', 2, false]
 * ]); // -> [['a', 'b'], [1, 2], [true, false]]
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * declare function unzip(arr: Array<any[]>): Array<any[]>;
 */

_('map pluck max');

exports = function(arr) {
    const len = max.apply(
        null,
        map(arr, function(arr) {
            return arr.length;
        })
    );
    const ret = Array(len);

    for (let i = 0; i < len; i++) {
        ret[i] = pluck(arr, i);
    }

    return ret;
};
