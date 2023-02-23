/* Strip UTF-8 byte order mark.
 *
 * |Name  |Desc           |
 * |------|---------------|
 * |str   |String to strip|
 * |return|Result string  |
 */

/* example
 * stripBom('\uFEFFlicia'); // -> 'licia'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function stripBom(str: string): string;
 */

exports = function(str) {
    if (str.charCodeAt(0) === 0xfeff) {
        return str.slice(1);
    }
    return str;
};
