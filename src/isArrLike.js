/* Check if value is array-like.
 *
 * |Name  |Desc                       |
 * |------|---------------------------|
 * |val   |Value to check             |
 * |return|True if value is array like|
 *
 * Function returns false.
 */

/* example
 * isArrLike('test'); // -> true
 * isArrLike(document.body.children); // -> true;
 * isArrLike([1, 2, 3]); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isArrLike(val: any): boolean;
 */

_('isNum isFn');

const MAX_ARR_IDX = Math.pow(2, 53) - 1;

exports = function(val) {
    if (!val) return false;

    const len = val.length;

    return isNum(len) && len >= 0 && len <= MAX_ARR_IDX && !isFn(val);
};
