/* Convert string to "spaceCase".
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |str   |String to convert |
 * |return|Space cased string|
 */

/* example
 * spaceCase('fooBar'); // -> foo bar
 * spaceCase('foo.bar'); // -> foo bar
 * spaceCase('foo.bar'); // -> foo bar
 */

/* module
 * env: all
 */

/* typescript
 * export declare function spaceCase(str: string): string;
 */

_('splitCase');

exports = function(str) {
    return splitCase(str).join(' ');
};
