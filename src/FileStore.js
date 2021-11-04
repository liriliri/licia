/* File storage.
 *
 * ### constructor
 *
 * |Name|Desc              |
 * |----|------------------|
 * |path|File path to store|
 * |data|Default data      |
 */

/* example
 * const store = new FileStore('path/to/file');
 * store.set('name', 'licia');
 */

/* module
 * env: node
 */

/* typescript
 * export declare class FileStore extends Store {
 *     constructor(path: string, data?: any);
 * }
 */

_('Store isEmpty debounce stringify isObj defaults noop');

const fs = require('fs');

exports = Store.extend({
    initialize: function FileStore(path, data) {
        this._path = path;
        data = data || {};

        let fileData;
        if (fs.existsSync(path)) {
            try {
                fileData = JSON.parse(fs.readFileSync(path, 'utf8'));
            } catch (e) {
                fileData = {};
            }
        }
        if (!isObj(fileData)) {
            fileData = {};
        }
        data = defaults(fileData, data);

        this.save = debounce(data => {
            if (isEmpty(data)) {
                fs.unlink(this._path, noop);
                return;
            }
            fs.writeFile(this._path, stringify(data), 'utf8', noop);
        }, 300);

        this.callSuper(Store, 'initialize', [data]);
    }
});
