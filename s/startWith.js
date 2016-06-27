/* Check if string starts with the given target string.
 *
 * |Name  |Type   |Desc                             |
 * |------|-------|---------------------------------|
 * |str   |string |The string to search             |
 * |prefix|string |String prefix                    |
 * |return|boolean|True if string starts with prefix|
 *
 * ```javascript
 * startWith('ab', 'a'); // -> true
 * ```
 */

exports = function (str, prefix)
{
    return str.indexOf(prefix) === 0;
};