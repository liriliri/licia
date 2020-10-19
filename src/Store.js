/* Memory storage.
 *
 * Extend from Emitter.
 *
 * ### constructor
 *
 * |Name|Desc        |
 * |----|------------|
 * |data|Initial data|
 *
 * ### set
 *
 * Set value.
 *
 * |Name|Desc        |
 * |----|------------|
 * |key |Value key   |
 * |val |Value to set|
 *
 * Set values.
 *
 * |Name  |Desc           |
 * |------|---------------|
 * |values|Key value pairs|
 *
 * This emit a change event whenever is called.
 *
 * ### get
 *
 * Get value.
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |key   |Value key         |
 * |return|Value of given key|
 *
 * Get values.
 *
 * |Name  |Desc           |
 * |------|---------------|
 * |keys  |Array of keys  |
 * |return|Key value pairs|
 *
 * ### remove
 *
 * Remove value.
 *
 * |Name|Desc         |
 * |----|-------------|
 * |key |Key to remove|
 *
 * ### clear
 *
 * Clear all data.
 *
 * ### each
 *
 * Iterate over values.
 *
 * |Name|Desc                          |
 * |----|------------------------------|
 * |fn  |Function invoked per iteration|
 */

/* example
 * const store = new Store('test');
 * store.set('user', { name: 'licia' });
 * store.get('user').name; // -> 'licia'
 * store.clear();
 * store.each(function(val, key) {
 *     // Do something.
 * });
 * store.on('change', function(key, newVal, oldVal) {
 *     // It triggers whenever set is called.
 * });
 */

/* module
 * env: all
 */

/* typescript
 * export declare class Store extends Emitter {
 *     constructor(data?: {});
 *     set(key: string, val: any): void;
 *     set(values: {}): void;
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
    set(key, val) {
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
    get(key) {
        const data = this._data;

        if (isStr(key)) return data[key];

        const ret = {};
        each(key, function(val) {
            ret[val] = data[val];
        });

        return ret;
    },
    remove(key) {
        key = toArr(key);

        const data = this._data;

        each(key, function(val) {
            delete data[val];
        });

        this.save(data);
    },
    clear() {
        this._data = {};

        this.save(this._data);
    },
    each(fn) {
        each(this._data, fn);
    },
    // This methods exists to be overwritten.
    save(data) {
        this._data = data;
    }
});
