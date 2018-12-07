/* Check if value is array-like.
 *
 * |Name  |Type   |Desc                       |
 * |------|-------|---------------------------|
 * |val   |*      |Value to check             |
 * |return|boolean|True if value is array like|
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
 * test: all
 */

/* typescript
 * export declare function isArrLike(val: any): boolean;
 */

_('isNum isFn');

var MAX_ARR_IDX = Math.pow(2, 53) - 1;

exports = function(val) {
    if (!val) return false;

    var len = val.length;

    return isNum(len) && len >= 0 && len <= MAX_ARR_IDX && !isFn(val);
};
