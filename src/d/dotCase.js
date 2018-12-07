/* Convert string to "dotCase".
 *
 * |Name  |Type  |Desc             |
 * |------|------|-----------------|
 * |str   |string|String to convert|
 * |return|string|Dot cased string |
 */

/* example
 * dotCase('fooBar'); // -> foo.bar
 * dotCase('foo bar'); // -> foo.bar
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function dotCase(str: string): string;
 */

_('splitCase');

exports = function(str) {
    return splitCase(str).join('.');
};
