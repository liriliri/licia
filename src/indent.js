/* Indent each line in a string.
 *
 * |Name  |Desc                |
 * |------|--------------------|
 * |str   |String to indent    |
 * |char  |Character to prepend|
 * |len   |Indent length       |
 * |return|Indented string     |
 */

/* example
 * indent('foo\nbar', ' ', 4); // -> '    foo\n    bar'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function indent(
 *     str: string,
 *     char?: string,
 *     len?: number
 * ): string;
 */

_('isNum isUndef repeat');

const regLineBegin = /^(?!\s*$)/gm;

exports = function(str, char, len) {
    if (isNum(char)) {
        len = char;
        char = ' ';
    }
    if (isUndef(len)) len = 4;
    if (isUndef(char)) char = ' ';

    char = repeat(char, len);

    return str.replace(regLineBegin, char);
};
