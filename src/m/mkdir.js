/* Recursively create directories.
 *
 * |Name     |Desc               |
 * |---------|-------------------|
 * |dir      |Directory to create|
 * |mode=0777|Directory mode     |
 * |callback |Callback           |
 */

/* example
 * mkdir('/tmp/foo/bar/baz', function (err) {
 *     if (err) console.log(err);
 *     else console.log('Done');
 * });
 */

/* module
 * env: node
 */

/* typescript
 * export declare function mkdir(dir: string, mode?: number, cb?: Function): void;
 * export declare function mkdir(dir: string, cb?: Function): void;
 */

_('isFn noop');

const fs = require('fs');
const path = require('path');

const _0777 = parseInt('0777', 8);

exports = function(p, mode, cb) {
    if (isFn(mode)) {
        cb = mode;
        mode = _0777;
    }
    cb = cb || noop;
    p = path.resolve(p);

    fs.mkdir(p, mode, function(err) {
        if (!err) return cb();

        switch (err.code) {
            case 'ENOENT':
                exports(path.dirname(p), mode, function(err) {
                    if (err) return cb(err);

                    exports(p, mode, cb);
                });
                break;
            default:
                fs.stat(p, function(errStat, stat) {
                    if (errStat || !stat.isDirectory()) return cb(errStat);

                    cb();
                });
        }
    });
};
