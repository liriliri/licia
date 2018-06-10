/* Escape special chars to be used as literals in RegExp constructors.
 *
 * |Name  |Type  |Desc            |
 * |------|------|----------------|
 * |str   |string|String to escape|
 * |return|string|Escaped string  |
 *
 * ```javascript
 * escapeRegExp('[licia]'); // -> '\\[licia\\]'
 * ```
 */

/* module
 * env: all
 * test: all
 */

function exports(str) {
    return str.replace(/\W/g, '\\$&');
}
