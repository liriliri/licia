/* Convert string to "pascalCase".
 *
 * |Name  |Type  |Desc               |
 * |------|------|-------------------|
 * |str   |string|String to convert  |
 * |return|string|Pascal cased string|
 */

/* example
 * pascalCase('fooBar'); // -> FooBar
 * pascalCase('foo bar'); // -> FooBar
 * pascalCase('foo_bar'); // -> FooBar
 * pascalCase('foo.bar'); // -> FooBar
 */

/* module
 * env: all
 * test: all
 */

_('camelCase upperFirst');

exports = function(str) {
    return upperFirst(camelCase(str));
};
