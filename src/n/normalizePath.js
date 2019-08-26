/* Normalize file path slashes.
 *
 * |Name  |Type  |Desc             |
 * |------|------|-----------------|
 * |path  |string|Path to normalize|
 * |return|string|Normalized path  |
 */

/* example
 * normalizePath('\\foo\\bar\\'); // -> '/foo/bar/'
 * normalizePath('./foo//bar'); // -> './foo/bar'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function normalizePath(path: string): string;
 */

exports = function(path) {
    return path.replace(regSlashes, '/');
};

const regSlashes = /[\\/]+/g;
