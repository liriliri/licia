/* Concat multiple arrays into a single array.
 *
 * |Name  |Type |Desc              |
 * |------|-----|------------------|
 * |...arr|array|Arrays to concat  |
 * |return|array|Concatenated array|
 */

/* example
 * concat([1, 2], [3], [4, 5]); // -> [1, 2, 3, 4, 5]
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function concat(...args: Array<any[]>): any[]
 */

_('toArr');

exports = function() {
    var args = toArr(arguments),
        ret = [];

    for (var i = 0, len = args.length; i < len; i++) {
        ret = ret.concat(toArr(args[i]));
    }

    return ret;
};
