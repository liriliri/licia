/* Compute the list of values that are the intersection of all the arrays.
 *
 * |Name  |Type |Desc                          |
 * |------|-----|------------------------------|
 * |...arr|array|Arrays to inspect             |
 * |return|array|New array of inspecting values|
 */

/* example
 * intersect([1, 2, 3, 4], [2, 1, 10], [2, 1]); // -> [1, 2]
 */

/* module
 * env: all
 * test: all
 */

_('contain toArr');

function exports(arr) {
    var ret = [],
        args = toArr(arguments),
        argsLen = args.length,
        item,
        i,
        j,
        len;

    for (i = 0, len = arr.length; i < len; i++) {
        item = arr[i];
        if (contain(ret, item)) continue;

        for (j = 1; j < argsLen; j++) {
            if (!contain(args[j], item)) break;
        }

        if (j === argsLen) ret.push(item);
    }

    return ret;
}
