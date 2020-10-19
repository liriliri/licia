/* Check if value is an empty object or array.
 *
 * |Name  |Desc                  |
 * |------|----------------------|
 * |val   |Value to check        |
 * |return|True if value is empty|
 */

/* example
 * isEmpty([]); // -> true
 * isEmpty({}); // -> true
 * isEmpty(''); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isEmpty(val: any): boolean;
 */

_('isArrLike isArr isStr isArgs keys');

exports = function(val) {
    if (val == null) return true;

    if (isArrLike(val) && (isArr(val) || isStr(val) || isArgs(val))) {
        return val.length === 0;
    }

    return keys(val).length === 0;
};
