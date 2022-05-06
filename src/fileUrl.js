/* Convert a file path to a file URL.
 *
 * |Name  |Desc     |
 * |------|---------|
 * |path  |File path|
 * |return|File URL |
 */

/* example
 * fileUrl('c:\\foo\\bar'); // -> 'file:///c:/foo/bar'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function fileUrl(path: string): string;
 */

_('normalizePath');

exports = function(path) {
    path = normalizePath(path);

    if (path[0] !== '/') {
        path = `/${path}`;
    }

    return encodeURI(`file://${path}`).replace(/[?#]/g, encodeURIComponent);
};
