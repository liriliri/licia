/* Check if value is an empty object or array.
 *
 * |Name  |Type   |Desc                  |
 * |------|-------|----------------------|
 * |val   |*      |Value to check        |
 * |return|boolean|True if value is empty|
 *
 * ```javascript
 * isEmpty([]); // -> true
 * isEmpty({}); // -> true
 * isEmpty(''); // -> true
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('isArrLike isArr isStr isArgs keys');

function exports(val) {
    if (val == null) return true;

    if (isArrLike(val) && (isArr(val) || isStr(val) || isArgs(val))) {
        return val.length === 0;
    }

    return keys(val).length === 0;
}
