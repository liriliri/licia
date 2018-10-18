/* Convert string to "spaceCase".
 *
 * |Name  |Type  |Desc              |
 * |------|------|------------------|
 * |str   |string|String to convert |
 * |return|string|Space cased string|
 */

/* example
 * spaceCase('fooBar'); // -> foo bar
 * spaceCase('foo.bar'); // -> foo bar
 * spaceCase('foo.bar'); // -> foo bar
 */

/* module
 * env: all
 * test: all
 */

_('splitCase');

function exports(str) {
    return splitCase(str).join(' ');
}
