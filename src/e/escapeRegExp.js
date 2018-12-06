/* Escape special chars to be used as literals in RegExp constructors.
 *
 * |Name  |Type  |Desc            |
 * |------|------|----------------|
 * |str   |string|String to escape|
 * |return|string|Escaped string  |
 */

/* example
 * escapeRegExp('[licia]'); // -> '\\[licia\\]'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function escapeRegExp(str: string): string;
 */

exports = function(str) {
    return str.replace(/\W/g, '\\$&');
};
