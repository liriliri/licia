/* Convert string to "camelCase" text.
 *
 * |Name  |Type  |Desc                  |
 * |------------------------------------|
 * |str   |string|The string to convert |
 * |return|string|The camel cased string|
 *
 * ```javascript
 * camelCase('foo-bar'); // -> fooBar
 * camelCase('foo bar'); // -> fooBar
 * camelCase('foo_bar'); // -> fooBar
 * camelCase('foo.bar'); // -> fooBar
 * ```
 */

exports = function (str)
{
    return str.replace(/^[_.\- ]+/, '')
              .toLowerCase()
              .replace(/[_.\- ]+(\w|$)/g, function (m, p1)
              {
                  return p1.toUpperCase();
              });
};