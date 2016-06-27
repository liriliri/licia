/* Convert string to "dotCase".
 *
 * |Name  |Type  |Desc             |
 * |------|------|-----------------|
 * |str   |string|String to convert|
 * |return|string|Dot cased string |
 *
 * ```javascript
 * dotCase('fooBar'); // -> foo.bar
 * dotCase('foo bar'); // -> foo.bar
 * ```
 */

_('splitCase');

function exports(str)
{
    return splitCase(str).join('.');
}