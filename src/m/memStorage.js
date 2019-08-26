/* Memory-backed implementation of the Web Storage API.
 *
 * A replacement for environments where localStorage or sessionStorage is not available.
 */

/* example
 * const localStorage = window.localStorage || memStorage;
 * localStorage.setItem('test', 'licia');
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare const memStorage: typeof window.localStorage;
 */

_('keys');

exports = {
    getItem: function(key) {
        return (API_KEYS[key] ? cloak[key] : this[key]) || null;
    },
    setItem: function(key, val) {
        API_KEYS[key] ? (cloak[key] = val) : (this[key] = val);
    },
    removeItem: function(key) {
        API_KEYS[key] ? delete cloak[key] : delete this[key];
    },
    key: function(i) {
        const keys = enumerableKeys();

        return i >= 0 && i < keys.length ? keys[i] : null;
    },
    clear: function() {
        let keys = uncloakedKeys();

        /* eslint-disable no-cond-assign */
        for (let i = 0, key; (key = keys[i]); i++) delete this[key];

        keys = cloakedKeys();

        /* eslint-disable no-cond-assign */
        for (let i = 0, key; (key = keys[i]); i++) delete cloak[key];
    }
};

Object.defineProperty(exports, 'length', {
    enumerable: false,
    configurable: true,
    get: function() {
        return enumerableKeys().length;
    }
});

const cloak = {};

const API_KEYS = {
    getItem: 1,
    setItem: 1,
    removeItem: 1,
    key: 1,
    clear: 1,
    length: 1
};

function enumerableKeys() {
    return uncloakedKeys().concat(cloakedKeys());
}

function uncloakedKeys() {
    return keys(exports).filter(function(key) {
        return !API_KEYS[key];
    });
}

function cloakedKeys() {
    return keys(cloak);
}
