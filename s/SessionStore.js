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
 * 
 * ```javascript
 * var store = new SessionStore('licia');
 * store.set('name', 'licia');
 * ```
 */

/* module
 * env: browser
 * test: browser
 */

_('Store safeStorage isEmpty stringify defaults isObj');

var sessionStorage = safeStorage('session');

exports = Store.extend({
    initialize: function SessionStore(name, data) {
        this._name = name;

        var sessionData = sessionStorage.getItem(name);
        try {
            sessionData = JSON.parse(sessionData);
        } catch (e) {
            sessionData = {};
        }
        if (!isObj(sessionData)) sessionData = {};
        data = defaults(sessionData, data);
        this.callSuper(Store, 'initialize', [data]);
    },
    save: function(data) {
        if (isEmpty(data)) return sessionStorage.removeItem(this._name);
        sessionStorage.setItem(this._name, stringify(data));
    }
});
