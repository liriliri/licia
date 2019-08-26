/* Memory storage.
 *
 * Extend from Emitter.
 *
 * ### constructor
 *
 * |Name|Type  |Desc        |
 * |----|------|------------|
 * |data|object|Initial data|
 *
 * ### set
 *
 * Set value.
 *
 * |Name|Type  |Desc        |
 * |----|------|------------|
 * |key |string|Value key   |
 * |val |*     |Value to set|
 *
 * Set values.
 *
 * |Name|Type  |Desc           |
 * |----|------|---------------|
 * |vals|object|Key value pairs|
 *
 * This emit a change event whenever is called.
 *
 * ### get
 *
 * Get value.
 *
 * |Name  |Type  |Desc              |
 * |------|------|------------------|
 * |key   |string|Value key         |
 * |return|*     |Value of given key|
 *
 * Get values.
 *
 * |Name  |Type  |Desc           |
 * |------|------|---------------|
 * |keys  |array |Array of keys  |
 * |return|object|Key value pairs|
 *
 * ### remove
 *
 * Remove value.
 *
 * |Name|Type        |Desc         |
 * |----|------------|-------------|
 * |key |string array|Key to remove|
 *
 * ### clear
 *
 * Clear all data.
 *
 * ### each
 *
 * Iterate over values.
 *
 * |Name|Type    |Desc                           |
 * |----|--------|-------------------------------|
 * |fn  |function|Function invoked per interation|
 */

/* example
 * const store = new Store('test');
 * store.set('user', {name: 'licia'});
 * store.get('user').name; // -> 'licia'
 * store.clear();
 * store.each(function (val, key) {
 *     // Do something.
 * });
 * store.on('change', function (key, newVal, oldVal) {
 *     // It triggers whenever set is called.
 * });
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare class Store extends Emitter {
 *     constructor(data?: {});
 *     set(key: string, val: any): void;
 *     set(vals: {}): void;
 *     get(key: string): any;
 *     get(keys: string[]): {};
 *     remove(key: string): void;
 *     remove(keys: string[]): void;
 *     clear(): void;
 *     each(fn: (...args: any[]) => void): void;
 * }
 */

_('Emitter isStr isObj each toArr');

exports = Emitter.extend({
    initialize: function Store(data) {
        this.callSuper(Emitter, 'initialize', arguments);
        this._data = data || {};
        this.save(this._data);
    },
    set: function(key, val) {
        let data;

        if (isStr(key)) {
            data = {};
            data[key] = val;
        } else if (isObj(key)) {
            data = key;
        }

        const self = this;

        each(data, function(val, key) {
            const oldVal = self._data[key];
            self._data[key] = val;
            self.emit('change', key, val, oldVal);
        });

        this.save(this._data);
    },
    get: function(key) {
        const data = this._data;

        if (isStr(key)) return data[key];

        const ret = {};
        each(key, function(val) {
            ret[val] = data[val];
        });

        return ret;
    },
    remove: function(key) {
        key = toArr(key);

        const data = this._data;

        each(key, function(val) {
            delete data[val];
        });

        this.save(data);
    },
    clear: function() {
        this._data = {};

        this.save(this._data);
    },
    each: function(fn) {
        each(this._data, fn);
    },
    // This methods exists to be overwritten.
    save: function(data) {
        this._data = data;
    }
});
