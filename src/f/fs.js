/* Promised version of node.js fs module.
 */

/* example
 * fs.readFile('test.js').then(function (data) {
 *     // Do something
 * }).catch(function (err) {
 *     // Handle errors
 * });
 */

/* module
 * env: node
 * test: node
 */

/* typescript
 * export declare const fs: {
 *     readFile(path: string, encoding: string): Promise<string>;
 *     readFile(path: string): Promise<Buffer>;
 *     exists(path: string): Promise<boolean>;
 *     unlink(path: string): Promise<void>;
 *     writeFile(path: string, data: string, options?: string): Promise<void>;
 *     writeFile(path: string, data: Buffer): Promise<void>;
 *     readdir(path: string): Promise<string[]>;
 *     rmdir(path: string): Promise<void>;
 *     [key: string]: any;
 * };
 */

_('promisify root each Promise toArr');

const fs = require('fs');

each(
    [
        'access',
        'appendFile',
        'chmod',
        'chown',
        'close',
        'fchmod',
        'fchown',
        'fdatasync',
        'fstat',
        'fsync',
        'ftruncate',
        'futimes',
        'link',
        'lstat',
        'mkdir',
        'mkdtemp',
        'open',
        'read',
        'readFile',
        'readdir',
        'readlink',
        'realpath',
        'rename',
        'rmdir',
        'stat',
        'symlink',
        'truncate',
        'unlink',
        'utimes',
        'write',
        'writeFile'
    ],
    function(method) {
        exports[method] = promisify(fs[method]);
    }
);

exports.exists = function() {
    const args = toArr(arguments);

    return new exports.Promise(function(resolve) {
        args.push(resolve);
        fs.exists.apply(null, args);
    });
};

exports.Promise = root.Promise || Promise;
