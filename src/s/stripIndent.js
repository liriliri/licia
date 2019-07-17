/* Strip indentation from multi-line strings.
 *
 * |Name  |Type  |Desc           |
 * |------|------|---------------|
 * |str   |string|String to strip|
 * |return|string|Result string  |
 *
 * It can be used as function or template tag.
 */

/* example
 * stripIndent`
 *     Test string
 *         * item one
 *         * item two
 * `; // -> 'Test string\n    * item one\n    * item two'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function stripIndent(str: string): string;
 * export declare function stripIndent(
 *     literals: TemplateStringsArray,
 *     ...placeholders: any[]
 * ): string;
 */

_('isStr toArr min map trim');

exports = function(literals, ...placeholders) {
    if (isStr(literals)) literals = toArr(literals);

    let str = '';

    for (let i = 0, len = literals.length; i < len; i++) {
        str += literals[i];
        if (placeholders[i]) str += placeholders[i];
    }

    const lines = str.split('\n');
    const indentLens = [];
    for (let i = 0, len = lines.length; i < len; i++) {
        const line = lines[i];
        const indent = line.match(regStartSpaces);
        if (indent) {
            indentLens.push(indent[1].length);
        }
    }

    const indent = indentLens.length > 0 ? min.apply(null, indentLens) : 0;

    return trim(
        map(lines, line => (line[0] === ' ' ? line.slice(indent) : line)).join(
            '\n'
        )
    );
};

const regStartSpaces = /^(\s+)\S+/;
