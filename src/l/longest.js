/* Get the longest item in an array.
 *
 * |Name  |Type |Desc            |
 * |------|-----|----------------|
 * |arr   |array|Array to inspect|
 * |return|*    |Longest item    |
 */

/* example
 * longest(['a', 'abcde', 'abc']); // -> 'abcde'
 */

/* module
 * env: all
 * test: all
 */

_('size');

function exports(arr) {
    if (arr.length < 1) return;

    var ret = arr[0],
        retSize = size(arr[0]);

    for (var i = 1, len = arr.length; i < len; i++) {
        var elSize = size(arr[i]);
        if (elSize > retSize) {
            ret = arr[i];
            retSize = elSize;
        }
    }

    return ret;
}
