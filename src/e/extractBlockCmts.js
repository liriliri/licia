/* Extract block comments from source code.
 *
 * |Name  |Type  |Desc             |
 * |------|------|-----------------|
 * |str   |string|String to extract|
 * |return|array |Block comments   |
 */

/* example
 * extractBlockCmts('\/*licia*\/'); // -> ['licia']
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function extractBlockCmts(str: string): string[];
 */

_('map trim');

var regBlockCmt = /(\/\*[\s\S]*?\*\/)/gm;

exports = function(str) {
    var ret = str.match(regBlockCmt);

    if (!ret) return [];

    ret = map(ret, function(comment) {
        return trim(
            map(comment.split('\n'), function(line) {
                return trim(line).replace(/^\/\*+|\*+\/$|^\*+/g, '');
            }).join('\n')
        );
    });

    return ret;
};
