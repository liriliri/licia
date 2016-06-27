/* Extract block comments from source code.
 *
 * |Name  |Type  |Desc             |
 * |------|------|-----------------|
 * |str   |string|String to extract|
 * |return|array |Block comments   |
 *
 * ```javascript
 * extractBlockCmts('\/*eris*\/'); // -> ['eris']
 * ```
 */

_('map trim');

var regBlockCmt = /(\/\*[\s\S]*?\*\/)/mg;

function exports(str)
{
    var ret = str.match(regBlockCmt);

    if (!ret) return [];

    ret = map(ret, function (comment)
    {
        return trim(map(comment.split('\n'), function (line)
        {
            return trim(line).replace(/^\/\*+|\*+\/$|^\*+/g, '');
        }).join('\n'));
    });

    return ret;
}