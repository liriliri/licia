/* Convert string to "pascalCase".
 *
 * |Name  |Desc               |
 * |------|-------------------|
 * |str   |String to convert  |
 * |return|Pascal cased string|
 */

/* example
 * pascalCase('fooBar'); // -> FooBar
 * pascalCase('foo bar'); // -> FooBar
 * pascalCase('foo_bar'); // -> FooBar
 * pascalCase('foo.bar'); // -> FooBar
 */

/* module
 * env: all
 */

/* typescript
 * export declare function pascalCase(str: string): string;
 */

_('camelCase upperFirst');

exports = function(str) {
    return upperFirst(camelCase(str));
};
