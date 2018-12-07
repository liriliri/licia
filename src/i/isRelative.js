/* Check if path appears to be relative.
 *
 * |Name  |Type   |Desc                               |
 * |------|-------|-----------------------------------|
 * |path  |string |Path to check                      |
 * |return|boolean|True if path appears to be relative|
 */

/* example
 * isRelative('README.md'); // -> true
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isRelative(path: string): boolean;
 */

exports = function(path) {
    return !regAbsolute.test(path);
};

var regAbsolute = /^([a-z]+:)?[\\/]/i;
