/* Check if path appears to be relative.
 *
 * |Name  |Desc                               |
 * |------|-----------------------------------|
 * |path  |Path to check                      |
 * |return|True if path appears to be relative|
 */

/* example
 * isRelative('README.md'); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isRelative(path: string): boolean;
 */

exports = function(path) {
    return !regAbsolute.test(path);
};

const regAbsolute = /^([a-z]+:)?[\\/]/i;
