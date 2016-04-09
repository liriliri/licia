/* Extract block comments from source code.
 */

_('map trim');

var regBlockCmt = /(\/\*[\s\S]*?\*\/)/mg;

extractBlockCmts = function (str)
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
};