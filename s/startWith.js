/* Check if string starts with the given target string.
 *
 * |Name  |Type   |Desc                             |
 * |------|-------|---------------------------------|
 * |str   |string |String to search                 |
 * |prefix|string |String prefix                    |
 * |return|boolean|True if string starts with prefix|
 *
 * ```javascript
 * startWith('ab', 'a'); // -> true
 * ```
 */

/* module
 * env: all
 * test: all
 */

function exports(str, prefix) {
    return str.indexOf(prefix) === 0;
}
