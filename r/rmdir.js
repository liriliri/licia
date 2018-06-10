/* Recursively remove directories.
 *
 * |Name    |Type    |Desc               |
 * |--------|--------|-------------------|
 * |dir     |string  |Directory to remove|
 * |callback|function|Callback           |
 * 
 * ```javascript
 * rmdir('/tmp/foo/bar/baz', function (err) 
 * {
 *     if (err) console.log (err);
 *     else console.log('Done');
 * });
 * ```
 */

/* module
 * env: node
 * test: node
 */

_('noop parallel');

var fs = require('fs'),
    path = require('path');

function exports(p, cb) {
    cb = cb || noop;
    p = path.resolve(p);

    fs.lstat(p, function(err, stat) {
        if (err) return cb(err);

        var isDir = stat.isDirectory();

        if (!isDir) {
            return fs.unlink(p, function(err) {
                return err ? cb(err) : cb();
            });
        }

        fs.readdir(p, function(err, files) {
            if (err) return cb(err);

            var len = files.length;

            var cbs = [];
            for (var i = 0; i < len; i++) {
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
}
