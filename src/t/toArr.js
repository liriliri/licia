/* Convert value to an array.
 *
 * |Name  |Desc            |
 * |------|----------------|
 * |val   |Value to convert|
 * |return|Converted array |
 */

/* example
 * toArr({ a: 1, b: 2 }); // -> [{a: 1, b: 2}]
 * toArr('abc'); // -> ['abc']
 * toArr(1); // -> [1]
 * toArr(null); // -> []
 */

/* module
 * env: all
 */

/* typescript
 * export declare function toArr(val: any): any[];
 */

_('isArrLike map isArr isStr');

exports = function(val) {
    if (!val) return [];

    if (isArr(val)) return val;

    if (isArrLike(val) && !isStr(val)) return map(val);

    return [val];
};
