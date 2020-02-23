/* Truncate a string to a specific width.
 *
 * |Name   |Desc                 |
 * |-------|---------------------|
 * |txt    |Text to truncate     |
 * |width  |Maximum string length|
 * |options|Options object       |
 * |return |Truncated string     |
 *
 * Options:
 *
 * |Name          |Desc                              |
 * |--------------|----------------------------------|
 * |ellipsis='...'|String to indicate text is omitted|
 * |separator     |Separator pattern to truncate to  |
 */

/* example
 * truncate('ORA ORA ORA ORA ORA ORA', 12); // -> 'ORA ORA O...'
 * truncate('ORA ORA ORA ORA ORA ORA', 10, {
 *     separator: ' ',
 *     ellipsis: '……'
 * }); // -> 'ORA ORA……'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function truncate(txt: string, width: number, options?: {
 *     ellipsis?: string,
 *     separator: string
 * }): string;
 */

_('defaults isUndef');

exports = function(txt, width, options = {}) {
    defaults(options, defOptions);

    const { ellipsis, separator } = options;
    const len = txt.length;

    if (width > len) return txt;

    const end = width - ellipsis.length;
    if (end < 1) return ellipsis;

    let ret = txt.slice(0, end);
    if (isUndef(separator)) return ret + ellipsis;

    if (txt.indexOf(separator, end) !== end) {
        const idx = ret.lastIndexOf(separator);
        if (idx > -1) {
            ret = ret.slice(0, idx);
        }
    }

    return ret + ellipsis;
};

const defOptions = {
    ellipsis: '...'
};
