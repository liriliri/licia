/* Check if string starts with the given target string.
 *
 * |Name  |Type   |Desc                             |
 * |------|-------|---------------------------------|
 * |str   |string |String to search                 |
 * |prefix|string |String prefix                    |
 * |return|boolean|True if string starts with prefix|
 */

/* example
 * startWith('ab', 'a'); // -> true
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function startWith(str: string, prefix: string): boolean
 */

function exports(str, prefix) {
    return str.indexOf(prefix) === 0;
}
