/* Check if string ends with the given target string.
 *
 * |Name  |Desc                           |
 * |------|-------------------------------|
 * |str   |The string to search           |
 * |suffix|String suffix                  |
 * |return|True if string ends with target|
 */

/* example
 * endWith('ab', 'b'); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function endWith(str: string, suffix: string): boolean;
 */

exports = function(str, suffix) {
    const idx = str.length - suffix.length;

    return idx >= 0 && str.indexOf(suffix, idx) === idx;
};
