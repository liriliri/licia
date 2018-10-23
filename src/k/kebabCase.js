/* Convert string to "kebabCase".
 *
 * |Name  |Type  |Desc              |
 * |------|------|------------------|
 * |str   |string|String to convert |
 * |return|string|Kebab cased string|
 */

/* example
 * kebabCase('fooBar'); // -> foo-bar
 * kebabCase('foo bar'); // -> foo-bar
 * kebabCase('foo_bar'); // -> foo-bar
 * kebabCase('foo.bar'); // -> foo-bar
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function kebabCase(str: string): string
 */

_('splitCase');

exports = function(str) {
    return splitCase(str).join('-');
};
