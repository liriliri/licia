/* Escape special chars to be used as literals in RegExp constructors.
 *
 * |Name  |Desc            |
 * |------|----------------|
 * |str   |String to escape|
 * |return|Escaped string  |
 */

/* example
 * escapeRegExp('[licia]'); // -> '\\[licia\\]'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function escapeRegExp(str: string): string;
 */

exports = function(str) {
    return str.replace(/\W/g, '\\$&');
};
