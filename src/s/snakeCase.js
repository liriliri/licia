/* Convert string to "snakeCase".
 *
 * |Name  |Type  |Desc              |
 * |------|------|------------------|
 * |str   |string|String to convert |
 * |return|string|Snake cased string|
 */

/* example
 * snakeCase('fooBar'); // -> foo_bar
 * snakeCase('foo bar'); // -> foo_bar
 * snakeCase('foo.bar'); // -> foo_bar
 */

/* module
 * env: all
 * test: all
 */

_('splitCase');

function exports(str) {
    return splitCase(str).join('_');
}
