/* Recursively remove directories.
 *
 * |Name|Desc               |
 * |----|-------------------|
 * |dir |Directory to remove|
 * |cb  |Callback           |
 */

/* example
 * rmdir('/tmp/foo/bar/baz', function (err) {
 *     if (err) console.log (err);
 *     else console.log('Done');
 * });
 */

/* module
 * env: node
 */

/* typescript
 * export declare function rmdir(dir: string, cb?: Function): void;
 */

_('noop parallel');

const fs = require('fs');
const path = require('path');

exports = function(p, cb) {
    cb = cb || noop;
    p = path.resolve(p);

    fs.lstat(p, function(err, stat) {
        if (err) return cb(err);

        const isDir = stat.isDirectory();

        if (!isDir) {
            return fs.unlink(p, function(err) {
                return err ? cb(err) : cb();
            });
        }

        fs.readdir(p, function(err, files) {
            if (err) return cb(err);

            const len = files.length;

            const cbs = [];
            for (let i = 0; i < len; i++) {
                cbs.push(
                    (function(file) {
                        return function(cb) {
                            exports(file, cb);
                        };
                    })(path.resolve(p, files[i]))
                );
            }

            parallel(cbs, function(err) {
                if (err) return cb(err);

                fs.rmdir(p, function(err) {
                    return err ? cb(err) : cb();
                });
            });
        });
    });
};
