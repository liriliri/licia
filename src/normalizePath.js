/* Normalize file path slashes.
 *
 * |Name  |Desc             |
 * |------|-----------------|
 * |path  |Path to normalize|
 * |return|Normalized path  |
 */

/* example
 * normalizePath('\\foo\\bar\\'); // -> '/foo/bar/'
 * normalizePath('./foo//bar'); // -> './foo/bar'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function normalizePath(path: string): string;
 */

exports = function(path) {
    return path.replace(regSlashes, '/');
};

const regSlashes = /[\\/]+/g;
