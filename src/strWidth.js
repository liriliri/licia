/* Get string's visual width.
 *
 * |Name  |Desc               |
 * |------|-------------------|
 * |str   |String to get width|
 * |return|Visual width       |
 */

/* example
 * strWidth('Hello \nworld!'); // -> 12
 * strWidth('\u001b[4m你好，世界！\u001b[0m'); // -> 12
 */

/* module
 * env: all
 * since: 1.24.0
 */

/* typescript
 * export declare function strWidth(str: string): number;
 */

_('stripAnsi isFullWidth');

exports = function(str) {
    str = stripAnsi(str);
    let width = 0;

    for (let i = 0, len = str.length; i < len; i++) {
        const c = str.codePointAt(i);

        // Control character
        if (c <= 31 || c === 127) {
            continue;
        }

        width += isFullWidth(c) ? 2 : 1;
    }

    return width;
};
