/* Make an object map using array of strings.
 *
 * |Name    |Type  |Desc            |
 * |--------|------|----------------|
 * |arr     |array |Array of strings|
 * |val=true|*     |Key value       |
 * |return  |object|Object map      |
 * 
 * ```javascript
 * var needPx = arrToMap([
 *     'column-count', 'columns', 'font-weight', 'line-weight', 'opacity', 'z-index', 'zoom'
 * ]);
 * 
 * if (needPx[key]) val += 'px';
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('each isUndef isFn');

function exports(arr, val) 
{
    if (isUndef(val)) val = true;
    var _isFn = isFn(val);

    var ret = {};

    each(arr, function (key) 
    { 
        ret[key] = _isFn ? val(key) : val; 
    });

    return ret;
}