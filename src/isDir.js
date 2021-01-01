/* Check if a path is directory.
 *
 * |Name  |Desc                       |
 * |------|---------------------------|
 * |path  |Path to check              |
 * |return|True if path is a directory|
 */

/* example
 * isDir('/foo/bar');
 */

/* module
 * env: node
 */

/* typescript
 * export declare function isDir(path: string): Promise<boolean>;
 */

_('root');

const fs = require('fs');

exports = function(path) {
    return new root.Promise(function(resolve, reject) {
        fs.stat(path, function(err, stats) {
            if (err) {
                if (err.code === 'ENOENT') {
                    resolve(false);
                } else {
                    reject(err);
                }
            } else {
                resolve(stats.isDirectory());
            }
        });
    });
};
