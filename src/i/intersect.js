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

/* typescript
 * export declare function intersect(...arr: Array<any[]>): any[];
 */

_('contain toArr');

exports = function(arr) {
    const ret = [];
    const args = toArr(arguments);
    const argsLen = args.length;

    for (let i = 0, len = arr.length; i < len; i++) {
        const item = arr[i];
        if (contain(ret, item)) continue;

        let j = 1;
        for (; j < argsLen; j++) {
            if (!contain(args[j], item)) break;
        }

        if (j === argsLen) ret.push(item);
    }

    return ret;
};
