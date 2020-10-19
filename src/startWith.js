/* Check if string starts with the given target string.
 *
 * |Name  |Desc                             |
 * |------|---------------------------------|
 * |str   |String to search                 |
 * |prefix|String prefix                    |
 * |return|True if string starts with prefix|
 */

/* example
 * startWith('ab', 'a'); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function startWith(str: string, prefix: string): boolean;
 */

exports = function(str, prefix) {
    return str.indexOf(prefix) === 0;
};
