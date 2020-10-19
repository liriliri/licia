/* Strip html tags from a string.
 *
 * |Name  |Desc           |
 * |------|---------------|
 * |str   |String to strip|
 * |return|Result string  |
 */

/* example
 * stripHtmlTag('<p>Hello</p>'); // -> 'Hello'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function stripHtmlTag(str: string): string;
 */

const regHtmlTag = /<[^>]*>/g;

exports = function(str) {
    return str.replace(regHtmlTag, '');
};
