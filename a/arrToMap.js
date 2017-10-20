/* Make an object map using array of strings.
 *
 * |Name  |Type  |Desc            |
 * |------|------|----------------|
 * |arr   |array |Array of strings|
 * |return|object|Object map      |
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

_('each');

function exports(arr) 
{
    var ret = {};

    each(arr, function (val) 
    { 
        ret[val] = true; 
    });

    return ret;
}