/* Convert string to "camelCase".
 *
 * |Name  |Type  |Desc              |
 * |--------------------------------|
 * |str   |string|String to convert |
 * |return|string|Camel cased string|
 *
 * ```javascript
 * camelCase('foo-bar'); // -> fooBar
 * camelCase('foo bar'); // -> fooBar
 * camelCase('foo_bar'); // -> fooBar
 * camelCase('foo.bar'); // -> fooBar
 * ```
 */

_('splitCase');

function exports(str)
{
    var arr = splitCase(str);

    var ret = arr[0];
    arr.shift();

    arr.forEach(capitalize, arr);
    ret += arr.join('');

    return ret;
}

function capitalize(val, idx)
{
    this[idx] = val.replace(/\w/, function (match)
    {
        return match.toUpperCase();
    });
}