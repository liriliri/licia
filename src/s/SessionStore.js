/* SessionStorage wrapper.
 *
 * Extend from Store.
 *
 * ### constructor
 *
 * |Name|Type  |Desc                    |
 * |----|------|------------------------|
 * |name|string|SessionStorage item name|
 * |data|object|Default data            |
 */

/* example
 * const store = new SessionStore('licia');
 * store.set('name', 'licia');
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare class SessionStore extends Store {
 *     constructor(name: string, data?: any);
 * }
 */

_('Store safeStorage isEmpty stringify defaults isObj');

const sessionStorage = safeStorage('session');

exports = Store.extend({
    initialize: function SessionStore(name, data) {
        this._name = name;
        data = data || {};

        let sessionData = sessionStorage.getItem(name);
        try {
            sessionData = JSON.parse(sessionData);
        } catch (e) {
            sessionData = {};
        }
        if (!isObj(sessionData)) sessionData = {};
        data = defaults(sessionData, data);
        this.callSuper(Store, 'initialize', [data]);
    },
    save(data) {
        if (isEmpty(data)) return sessionStorage.removeItem(this._name);
        sessionStorage.setItem(this._name, stringify(data));
    }
});
