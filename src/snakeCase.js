/* Convert string to "snakeCase".
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |str   |String to convert |
 * |return|Snake cased string|
 */

/* example
 * snakeCase('fooBar'); // -> foo_bar
 * snakeCase('foo bar'); // -> foo_bar
 * snakeCase('foo.bar'); // -> foo_bar
 */

/* module
 * env: all
 */

/* typescript
 * export declare function snakeCase(str: string): string;
 */

_('splitCase');

exports = function(str) {
    return splitCase(str).join('_');
};
