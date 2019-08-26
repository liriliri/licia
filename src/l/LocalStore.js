/* LocalStorage wrapper.
 *
 * Extend from Store.
 *
 * ### constructor
 *
 * |Name|Type  |Desc                  |
 * |----|------|----------------------|
 * |name|string|LocalStorage item name|
 * |data|object|Default data          |
 */

/* example
 * const store = new LocalStore('licia');
 * store.set('name', 'licia');
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare class LocalStore extends Store {
 *     constructor(name: string, data?: {});
 * }
 */

_('Store safeStorage isEmpty stringify defaults isObj');

const localStorage = safeStorage('local');

exports = Store.extend({
    initialize: function LocalStore(name, data) {
        this._name = name;
        data = data || {};

        let localData = localStorage.getItem(name);
        try {
            localData = JSON.parse(localData);
        } catch (e) {
            localData = {};
        }
        if (!isObj(localData)) localData = {};
        data = defaults(localData, data);
        this.callSuper(Store, 'initialize', [data]);
    },
    save: function(data) {
        if (isEmpty(data)) return localStorage.removeItem(this._name);
        localStorage.setItem(this._name, stringify(data));
    }
});
