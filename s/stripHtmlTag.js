/* Strip html tags from a string.
 *
 * |Name  |Type  |Desc           |
 * |------|------|---------------|
 * |str   |string|String to strip|
 * |return|string|Resulted string|
 *
 * ```javascript
 * stripHtmlTag('<p>Hello</p>'); // -> 'Hello'
 * ```
 */

/* module
 * env: all
 * test: all
 */

var regHtmlTag = /<[^>]*>/g;

function exports(str) {
    return str.replace(regHtmlTag, '');
}
