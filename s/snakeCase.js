/* Convert string to "snakeCase".
 *
 * |Name  |Type  |Desc              |
 * |------|------|------------------|
 * |str   |string|String to convert |
 * |return|string|Snake cased string|
 *
 * ```javascript
 * snakeCase('fooBar'); // -> foo_bar
 * snakeCase('foo bar'); // -> foo_bar
 * snakeCase('foo.bar'); // -> foo_bar
 * ```
 */

_('splitCase');

function exports(str)
{
    return splitCase(str).join('_');
}