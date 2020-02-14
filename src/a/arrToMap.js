/* Make an object map using array of strings.
 *
 * |Name    |Desc            |
 * |--------|----------------|
 * |arr     |Array of strings|
 * |val=true|Key value       |
 * |return  |Object map      |
 */

/* example
 * const needPx = arrToMap([
 *     'column-count', 'columns', 'font-weight', 'line-weight', 'opacity', 'z-index', 'zoom'
 * ]);
 * const key = 'column-count';
 * let val = '5';
 * if (needPx[key]) val += 'px';
 * console.log(val); // -> '5px'
 */

/* module
 * env: all
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
    const _isFn = isFn(val);

    const ret = {};

    each(arr, function(key) {
        ret[key] = _isFn ? val(key) : val;
    });

    return ret;
};
