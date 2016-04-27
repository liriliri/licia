/* Convert string to "kebabCase".
 *
 * |Name  |Type  |Desc              |
 * |--------------------------------|
 * |str   |string|String to convert |
 * |return|string|Kebab cased string|
 *
 * ```javascript
 * kebabCase('fooBar'); // -> foo-bar
 * kebabCase('foo bar'); // -> foo-bar
 * kebabCase('foo_bar'); // -> foo-bar
 * kebabCase('foo.bar'); // -> foo-bar
 * ```
 */

_('splitCase');

function exports(str)
{
    return splitCase(str).join('-');
}