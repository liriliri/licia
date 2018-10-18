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

function exports(path) {
    return !regAbsolute.test(path);
}

var regAbsolute = /^([a-z]+:)?[\\/]/i;
