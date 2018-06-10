/* Normalize file path slashes.
 * 
 * |Name  |Type  |Desc             |
 * |------|------|-----------------|
 * |path  |string|Path to normalize|
 * |return|string|Normalized path  |
 * 
 * ```javascript
 * normalizePath('\\foo\\bar\\'); // -> '/foo/bar/'
 * normalizePath('./foo//bar'); // -> './foo/bar'
 * ```
 */

/* module
 * env: all
 * test: all
 */

function exports(path) {
    return path.replace(regSlashes, '/');
}

var regSlashes = /[\\/]+/g;
