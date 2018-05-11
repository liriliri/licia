/* Promised version of node.js fs module.
 *
 * ```javascript
 * fs.readFile('test.js').then(function (data) 
 * {
 *     // Do something
 * });
 * ```
 */

/* module
 * env: node
 * test: node
 */ 

_('promisify each Promise toArr');

var fs = require('fs');

each([
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
], function (method) 
{
    exports[method] = promisify(fs[method]);
});

exports.exists = function () 
{
    var args = toArr(arguments);

    return new exports.Promise(function (resolve, reject) 
    {
        args.push(resolve);
        fs.exists.apply(null, args);
    });
};

exports.Promise = root.Promise || Promise;