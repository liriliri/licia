/* Convert string to "dotCase".
 *
 * |Name  |Desc             |
 * |------|-----------------|
 * |str   |String to convert|
 * |return|Dot cased string |
 */

/* example
 * dotCase('fooBar'); // -> foo.bar
 * dotCase('foo bar'); // -> foo.bar
 */

/* module
 * env: all
 */

/* typescript
 * export declare function dotCase(str: string): string;
 */

_('splitCase');

exports = function(str) {
    return splitCase(str).join('.');
};
