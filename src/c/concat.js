/* Concat multiple arrays into a single array.
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |...arr|Arrays to concat  |
 * |return|Concatenated array|
 */

/* example
 * concat([1, 2], [3], [4, 5]); // -> [1, 2, 3, 4, 5]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function concat(...args: Array<any[]>): any[];
 */

_('toArr');

exports = function() {
    const args = toArr(arguments);
    let ret = [];

    for (let i = 0, len = args.length; i < len; i++) {
        ret = ret.concat(toArr(args[i]));
    }

    return ret;
};
