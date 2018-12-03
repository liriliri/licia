/* Make an object map using array of strings.
 *
 * |Name    |Type  |Desc            |
 * |--------|------|----------------|
 * |arr     |array |Array of strings|
 * |val=true|*     |Key value       |
 * |return  |object|Object map      |
 */

/* example
 * var needPx = arrToMap([
 *     'column-count', 'columns', 'font-weight', 'line-weight', 'opacity', 'z-index', 'zoom'
 * ]);
 * 
 * if (needPx[key]) val += 'px';
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function arrToMap<T>(
 *     arr: string[],
 *     val?: T
 * ): { [key: string]: T };
 */

_('each isUndef isFn');

exports = function(arr, val) {
    if (isUndef(val)) val = true;
    var _isFn = isFn(val);

    var ret = {};

    each(arr, function(key) {
        ret[key] = _isFn ? val(key) : val;
    });

    return ret;
};
