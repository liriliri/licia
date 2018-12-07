/* Strip html tags from a string.
 *
 * |Name  |Type  |Desc           |
 * |------|------|---------------|
 * |str   |string|String to strip|
 * |return|string|Resulted string|
 */

/* example
 * stripHtmlTag('<p>Hello</p>'); // -> 'Hello'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function stripHtmlTag(str: string): string;
 */

var regHtmlTag = /<[^>]*>/g;

exports = function(str) {
    return str.replace(regHtmlTag, '');
};
